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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JGKP6PC%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhmpqUnptF8LZnGRWblRtHd4VxVZXqckmNhyCJQMfDkAIhAMt4p2fZTw2A00daDRitIEf%2BHCvo3Gak2XsvPFQKiqLUKv8DCD4QABoMNjM3NDIzMTgzODA1Igwr4op3bxElZFVoLw4q3AOmZbqnmRp0fWCuBxVSjieFLZBa6VE5tkrLMENIjXfmqhWNoRmHYxJQpcQVdegFM1RETuspHxD7NdyGNtJnl3PJCPXLr7nWh8zsgOLN6sjqY11A%2FOHKyGNof5VSAe94rviiHEc5kjZa2VehU3HFxwGhla4dXPMa5pEI1Pj3%2BuqHC4zS2jSGj6MP7sRxbDubaS2wbxnSUr3WOKZVVra9c9GFft7dBh3VaT7dDXNe5rSTnEQv09fUfjpLnH3KQqUoPMI3lSNpKujHMrA67XEm0BXO%2Bmz94Jwv6Gs449yzYE2BxDqPu03X3vNZDl%2FVIorfbSKyLBWY5HsjnPbdslxW48pZHF4IVhfwB%2FHAaFMqrtXhDiB7bFfwmV8B5%2F0WOvq7vClViUt2L6TnPe4CKIMaAT37%2BSS1f%2F02D4pfZ%2F7QtIwgWXnE%2BRA82tHCf890w3161y1sNShmOhoCoBBEjA3N%2B3f1EsB%2BlKint2f%2B9HvVXR%2BMWtdbLnhDJYcIeXfYZnsI0njOZoe6YrV%2FtcmB75Pp3K3febFUS1wpMJMZZE5tVK%2BrAdE0XTMQ6Orep13IWjT%2BZp%2BsVyjBUhxb%2BfoVjFA76z0%2F0d12L7HurEoPcVHY%2F3vURVIXvUBYpRADQODO%2BTD12t6%2BBjqkAUn4cdQAlU%2Fnn9ugC4VkTI9WQIxNcVvD27CVjf1SVNBffiy3tPm8lPkFuBSAoeWdlEam2HccrZ4nqjxHUmFrvBoqCeIz6ddN509TDXwouiktvNfXMKRneRowE%2FBk8bDU%2BNX3WjxU3Ue3aOJpdg8bEVtfpHFsVvQ9oxB2a3iILFsLJUj4rNj%2FoczRaAvK5gYfrPT2dBxroZqy613CFY0DB%2FMlp91J&X-Amz-Signature=1ac7e4f998e96dc7c9bfc99ba54b923df28019a8ea7961590689e71bee64edfa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
