---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYEU5YT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKSZ995zCF%2BwoMrZu%2BvUefcalJAQAAnw36rOZWleD%2FQIhAKM%2FeeKGfJivALM7M8ArynE2voGJlqTOmk565bm8vABDKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtyje7txHCNFqFj0cq3AOtF5MmOCyyfteMk6RnSPL69eq%2FCzHhVa1116HvtHRBOwqEXu9emF4aCmAjLgokpqtGFOL7FffoSlHjTYVAfpcsn2LVmtvcz8xGI2auSDOc0HF0gP%2BkeHKALQyxedZhRgibfHx4ZCTMOUYGO%2FfjA1elhf6bqgpfXmxbewZJW6JTLk0rHKiIY98xhVN2xdjWaHNWbhCyHMe5monN9%2BaDG3DM2XoB4L7AdNKjio0AgWufB4%2Fg%2FLC7hNcPd3NM7EGZhgDPL5aqEnz2IeXC3ObRmw8p56E0K6v%2Ft3l434qZny76eSCRn9xTKidP2lA8eFxte8nSsHW5DS%2F9k7ioX9B3HAx9OIG4jNnh21ZZQ0AHRxI6M3sIxyuVqtpxlGxmZtNE0iqG7Ydc5RNSzD4pwHIsALveJUVgbWDWRJ1LiuxvQZqdh%2FHfgZkDuWv0igr0NyjQdqNG0HwOPeqj3oOdm5b%2Foas9uqxX2A0CMuxhn03iRJ%2BT2IKLbWmHNJRxS78HJG5%2F35z8S1EFVBqA9Mo%2FQUReaaavM3%2FhukS2K%2BSEoOsd3Ne6NnH%2F4Yjb3wtMzRkBzXXGW%2FBsNUaI%2BJUP8Hnb9MuCTRWq5ugzpQfu7bM1RItdRiqHxo7keqmje7tAqr8bQDCUm%2FHDBjqkAVtuP8Jg%2BtwvVOazDWdr64ucxCV3V8oWLLZ85PfKmG8yMaWjctvlyqMFzWTGLtBdHK117w4UcmQBm2op1uxcKXg4ZcSqpBr%2FaExL3b8mQ3MrPYYbg2bD8cs6UXc%2BsaJxdsIb4XYsalNOIEx%2Bki8QUNqP5T%2FVZ2qV7nK3dKGje%2B8aIRjOifFfTDj7N5sozORuQKu%2FXKXLN%2Fvo3UAVuzMgTzp2uE1s&X-Amz-Signature=10100a046e534d6dffd2f907c85ba859f72e750464a99bf460be8166e5bc3d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
