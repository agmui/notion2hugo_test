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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVARTKG%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD3HC3PWGZDTnL%2FCjJUzgz4pyrp92Ml%2FwozUysygJqCKAIhAIPh3j%2FIaJkNAcxxRX8C%2BUac9xzYY3R2ALJpFUEZgokOKv8DCG0QABoMNjM3NDIzMTgzODA1Igz5Zz94v9ryPmkoOlIq3ANE7Hb6EOQSl9BsNAeU5s5DEZhbux6axFjIokkjaJc5T4ygqeNiTEL7VAXzgRlL14X71AMLSUj05Xj6IxZXti%2B0bKQ6dJwfNahQLwQR5tdaiALGJDGzmaWWmDhCBi8I%2FhxAR8y51jmo%2ByS5iNiSdwTmMNx74f%2FVmk%2FKPJTRxEDoOlopXVVtDBQTd4Mx8vYW%2BGt%2B6dOYd%2FJ8UvDpuNd97k0u2QKR8b3dhURAtGSgXH0Pw4fGmRGBoZOC9OuZdWdtWsf6%2BdWuo8o0Ze1ZxeOsXbXov1Gsu2wkcjAff6w%2Fj3eTNorpMW2dNL2ckQ2Z0mj%2BdQjEnmO9qZ0iDCRMGlUMjBvlPyTBa62gRnXoiFWo0%2Ff58WbRHMIyXnKp4n0lnUg0PkWubVeBceEnOb23ez6mjOzSJdY6YEyY3LRLj80mfy55X3nag2c%2F6wx7B9GJNb4NbhVsQzrRQ728wwXMLzhje9irmGz9hWCt9%2FCnu9xFzSZxRi0pFAYjZzc0Tr9kNgaY5vzGqea2ncc%2F8HLfseEavRIdJeBruP5khec7JO2Vm2rNAQWlZxeTa2Ab88rfzlSilrsAdRpWTDQth1rgdGoeIf4b8ryj%2BuCdq3LIQOPuiygFDzr89h8rb9L18WjxgjC%2F7uHDBjqkAUxGgzlyQWzBTmNqxkIG9MtY9CfbSZwyzFU4IY7J8%2B5k0QWWeSiE3IF%2B%2F6%2BVzlVW%2FkIePLfBwlJeL3Aftx12wfvvbus%2ByR8xibgWvEpshwuLAa1hoJqd4ik%2FR9IgZK0pmAGQB5trN9w00HhU2VdsCVw%2B%2F0MDl1Wl0%2B%2FOyQa6HhPjj5i%2B1a0WFP5fhdt%2Fz%2Bd0rpkEfJxbc6o1PNqcDA0SqiV041nQ&X-Amz-Signature=e340c4d0d28958a320aa79187e3350a5880e1f2df7fc49410ac2c41378d48b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
