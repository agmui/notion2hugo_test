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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4VCHH7T%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDzsC6hMcr4z4Ce2wYt3a4x1%2BVyf8mVQ50uQGvSv21QtgIhANCdjfMc3x1GAA%2BYlgoizm4h5NNnRas%2BT%2FVrBwNQlwyWKv8DCHAQABoMNjM3NDIzMTgzODA1Igzf5niOpNkGR6AohEEq3AOWA8TK1j3YhaNcpwgnUBTHyYqJt04oelBEwdosl6I55QKYaebHwkXjq2ddUqXqoM0wou9L%2FEmcpFJaYjfqimT2VrZqeaVyk7TxlM1zA81lUZRPWhDLGtEA8AJGoTFmhJuMmUIO%2BQT4Jfe8%2BHl8R%2F1hByxnb05OjW92K48NOGTI68YQIB4uQ8xRyH6clCP0Y%2Fly5h6yAkiiZ3BUGeRqMsvExlQaPzRRoInzQcw9N3IuZIlrdKM4uoOjaFpevbGTwiPexfLbhdJe2T1bPZuamKdm5sVR3H5lgNlcZKUL5ccepxp0c7iwxZlFVRtOZ1pkaNGJNUYBSiCKIMBDHerFusM3oEawC0UwC5b5j%2BuYbgZWyqKOG2uFR7FWZWqcLoNduZ8yl1ZwNw5uA01BvVlyZt71SeOA046r7jR8k79xLLr8hMfdUsXrGO0Yjnq0B4T01PoncwfiP1IiQ8jDFbxEpRpx725gyDTzIoJuFAepY0gkBquGRT1QpJYjDR8sQRnAHpiJsbuxctWZc0A5JbLJ1r%2B%2BfZPZ%2B2byuMed5atni%2F8o4eW7CWjXX2N%2Foju2EOH94wtM6UJzJGjBUGn58JNmzZnZC9BoelBN29Sf8eYfzjkM0FICZmJbwTHWtr5PSzCn9%2FjCBjqkAQnKic2JiviQZoKTX7ul%2F9h8bTCjgOkLpuW8Nln7XhuEg7%2BQRYCCcvtrlsNg3qNEv4R2O05v2Bik8gG9p2OqoPEdNbPzjVKgvTaBG5XX0JNWO5KWcfJZES4jNo%2BlYygiF4Awgzli0zcFvvWIBt4hDvgqStj5eZ2DOvD5ggWrieaVBnxs5Xm680wRoS0tzcJCWB1eaVaUoX4z1Z5oYaY%2Fj0DybsT6&X-Amz-Signature=8938f94ae5834a9d63ddf426ae31b98e576b486cd466b6024b237030829fc6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
