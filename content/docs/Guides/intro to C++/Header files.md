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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ2C2WTW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdvFO1bFKFk1GzuiZCWCGb9AZdEdxeRytig%2Fnddeh1PAIhAO0Hb4UjY%2BIDR%2FtMNQCMj0AEA2wcf8zapTkAlmPZQTHEKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytFbvu%2FwmxmV5O3aoq3AOL3S1lW6HqzHz8EyEtHmq2i5kWQu0X8bMHfRPA%2B6ruTgjDkOzhbxk6uouFzvN4nHBqaLpt8khNSUv4BjGmZ27Zzclwd8RxaotBjiIfAIWsIL5hbXG8HarlW5lA844uR%2BTL%2BVV84wMk8dvI6AZjAG8qNO9yayCe%2FviAQA6f0EwJ%2FbqK%2BDmgpEhjpLiSppnY0niYfR3KAJ3Mer%2FDTVrZVUxAJrtA7y%2FHulo4RknjpCovw48oOs0fcigOcZURFvEkQc9OkdBAeVLPm7TOUBb%2FOA3KACQpuGjjINyRsIDWfAGtgLrc44yBhxzls%2FzINyXotkrmUshL7aV8eDsQt5W52gLatRVC8KvPEghG7EaUUg%2F%2FLj7R72CBKKKqGMOKTsX96e27OyqiP0%2FtNADwi86MvdHh%2FL59CHSILJIJ8vY8zZJXRrOD3M7p0SPYWT1%2BwEOpQZLnL4ouSSlZBN9UK%2BFedEn5%2FEWdcWENQvATukwTA7l0ASwldTXk5FH%2F8miqMd9kPkpKQFFRAEGXFj39ibERBO4n76Rv5Ge%2B%2FIhn%2BjsQBfPNNLk9iy9Qsu8j29yg9VNdqWs5lqe0It1xpmOUaEbqkcgz9lwOsKFsX78LqFjXzsg%2FwHSQhgrCus5EiqYf7jCS8bvDBjqkAf%2FtWMS9T2yGWSRStNlb5TbH0%2FLzwLQnfWWsmawhRF0fEFmSYEEVMjCsiqy1ZxoHOmu5Pqv6nZs4PKy24TxWpzNthm1aub3xYIVz98wpnW4PQgngpKCoKihlojl2mTN2yzzaY%2FFAMvCG9MoNNu%2BC5D%2Bh%2FrKmih2LYqgJqvr%2BTlX6Lkr2DaBl6xzb02rIGrZhrLaP4ManeB8DNUgKedp4DOevI0%2F8&X-Amz-Signature=4fe0c4fac0213d73db5326d8360cbce63783a552a6394e5e342c82696fe04abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
