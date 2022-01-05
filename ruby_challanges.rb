# String methods
# String.chomp(separator=$/)
# String.strip
# String.chop

def process_text(arr)
    arr.map {|s| s.strip}.join(" ")
end
