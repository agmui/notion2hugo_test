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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W3CVPUS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0vlFA%2BE5AQYH18F%2FvmwXIfePZ7AULWCjiv4ngrIGsXAiBPhwaD0WMEiU8qStc5lIyhzIZakMrrsImbamz%2FttC8byqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwZRcQ%2BfpVT%2FvtYU9KtwD4fZGacJYXgCbccSDHTkXr%2Fc7M7PVeV4c08YxT6u11ZT63ZyCA0Lw7QuEHJb6u7hoYDETuVlEryKS0YLUXxZLDxHQu2wexUw7jrfASPzjDttmWMtfCpx6%2BrpV0SjDekUFU2DHO3B5XT1AQik8zDtG6Yf7%2B4%2BSmzu3%2BQSS54v95ttvb%2FV6hFbHmiFiRvsC0WufjWumripn2k6F0OdrwB8eTShCEAQP3Nposo1pxID0q7062BhVNUMXtx3qGNnVXK%2BsoVa3TZsL53kq6xORFrCsNj9pnm%2BfZk56d%2BGpD6jY24MBCU%2FCcYfz%2BgivQ49GsR%2FZh47hBDz2zHWumCRbbjHYLB%2Fy3jA9JhV31oCfBd%2FCEZe4uvliWpgiEzY%2Feh8Twdxx1FLcUSp6nYtNF7hff%2F7pSEhuPaucvRXHaXBHDYdvj%2FuXJR7c61pw%2BiQIwn3gOaRhBXVIOBnGfJX0%2FTUeH4Qdxe24ECuRcJ3fbYhj%2F35fRK6u802%2F%2BSoXx4pMwW7DwZAkk19IPCa5qJr2%2BQSbfETF7cTOzsjXdGTn9g6sFOkARoNqnwzm8FWDS4rj4Pk68V8f2I%2BY5a6%2Fq%2FZIWJ6%2FE9ABKA1VU8EL0zKjv2KCc9VzQI99kUCVUeftBXeTPaEwqfr0vAY6pgFST4Vp%2FHEP8rbh1Q6DIohIdN%2FsIQT1hWegLcC7xXvGq9j2UQGpThT7C9IFC7w8GhxnC9lKf276MTD6uG96%2BIP3a1ZmmuZHU%2FJWO4rXuCm5%2BSQYTrPrvbL9GYuOpA4RMKqMPkHMxXcHwxfeFWm7r4aYLS%2FnbGcdYMriZCnGQy5CIAvVbcyQPMN2XWUCuhEoGKkRm%2Fq%2B%2FqyCxUgsmigd0xR2Nq60SJQJ&X-Amz-Signature=c9c4d030f5d780d7492f97a4fd41ce5e8bb4769c57e745dacb5ebe0211f8ad48&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
