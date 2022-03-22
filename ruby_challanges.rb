# String methods
# String.chomp(separator=$/)
# String.strip
# String.chop

def process_text(arr)
    arr.map {|s| s.strip}.join(" ")
end


# Ruby - Enumerable - collect, ROT13
# Why did the chicken cross the road?
# Gb trg gb gur bgure fvqr!


def rot13(secret_messages)
    secret_messages.map { |c| c.tr("a-z", "n-za-m") }
    # https://ruby-doc.org/core-3.1.1/String.html#method-i-tr
end
