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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FAQB2TB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHxIv1DZbIp5R5jWVwGXikKwlO%2BUwnD%2FpWMJiQ3INCBbAiAvhRwLVBeGFh2QDVZSaa0qOtb8pU0Z2n1NFdkM3tRQFCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMFSsrNMIbUzJrCz%2FQKtwDBxD9f3t%2BKMXL39JziQOVItJ%2FdSiqPEJVfjeYPQrbu8w%2BDt9qkyVHy3a2nouwUwlka1825miDin7ytE9QaPzdnovUHElYRumpoJWwSjzgRs9prQKSxIVgW5c6CC%2F%2F8rb9CmNQIYkYYZNIoPcyTN3LGABY4FiaohpX3u3o6O9zM%2BWw8l4l23zrIs46KcXimCzOxAkn4G8rwNVxn3IJ03heqi4q85xWcYNHltdB0ogLZpBITQXXl6Y0a77xIYcNKJK%2FAXU5%2BoOATLKxjxtCAdnGbhyxX1j4VT6nZPWjxa%2B8NjiNCA4kACm%2BF4tjsjSKOa%2FXL10XMt9Pu12LTWM8BtPhEwno9I6j%2FCTIXvhs1LYCnqpbaDRaZhCONENI%2Fa0gPNf17eaYhGqgVAVv2frXjmrChzYKHGzAJP8W43RBVLB%2F9TSUIRQzMkCHknew%2BEmzGPKHvPTyBTH7nND1WHUu8qNhFaDL4cvFHaYUvHMmIhpIWyve4qHx%2FsSzWoKrQ42%2B%2Fiba32LP6ajg5sp5dqS4ydgbn%2BXJee0kmfq58CKc%2FYB1FbKH0kV4RMIQjeLfAhRVHeED0E0oeGMTYqvvZmn95y6M%2FgwHhaIlZnqNqJf9Em6lcESnOidKLo30fVqnOuswiYiZxAY6pgGTjjDKgcmLiSv%2F9XTtYTKvZA5EHVJWRZHSLsnhOuYfruFuiA2phUjoUZKpGMRbLq3o%2BTLXnN0L928YG0%2BDA0C1Rx1JNlKjD%2FqhbjZDUZfDK%2B0KhOeAMhyCwabIQ0rvvleJnF06KmY19K1J8EFlF2GPyCcfgj%2F0L%2Fd%2B1VgTCuQtz95ZbGDs1s2WCq9zgy8DouuybXUT%2BhLWdS6P35gzqwDUxyXosbLp&X-Amz-Signature=676dbcb892f031438c87559ccca783bf66bdb6acfeb57a8c977927d96e9f1b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
