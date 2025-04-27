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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7UNXOMA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHN8Yo4QvElCGM4S5Xb7vXz8B7qJHYWk6SjtVmRqZKtSAiEAxMljk3vTOYxgoAQmIxElBMBjVXsw%2B7h0vSJROcG3sd8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDKq8l7LQ%2BgJPqIoTFSrcA78dB2WA6Jh5xp3KyzUCrYdBGwTTQmHVDvZ6cjzwIpxCFNetoRhORCypT84m15URnD9WOzcAMEHDi2JQN7VvfGdfssdCZJLVjEZO755iK55aydjmAmbcV9lYkVSoRrPchCffn31d9BJaRcRleGxldz5KaviLmUf57lZrlEtPL6Lfxn3x9OdFSwvwXqXExHOaKnfn%2Fqvt3cPLndA16h%2FUf60Gn%2FI19SG5TI%2BUaKO8PiOZBf26J1MGOBuZqJ7Fxn6RIi9%2BOgEvXDHVT2PFi4CG7RoQk6EnKFazfvETo0F35YQ4Oyo3VBho7%2BrRER1xP9sf83BxSx2f%2FZElxkUH7Utjxdcq%2FK0L8pLgvTC%2BBc%2BUr%2BPkY1qowe1xNgH%2F%2Bm6rRa0%2BLvXTfzVMPtFzYsQxNUkDKdJUs9S9XruiZEil77OSw0Ohobu1ZObXR61y9ecwEcHSwBujf4h9iJm7t7dwG1szCEKkPZwIwx5RFhauUxfQGSo2Zc58OcMcp2hPsqUdzJd6fc%2BZ0fT50P5XbgbxJ4j2EQbWdtAzKioGOFAJUohmeVpDOlw%2F2f4wGbojYMNnmvIuQtq0nk6nkhdEumZ9aZwn4N2uDqQ5JuM7Ipw5B1O1UMBvtbmre91O7z7rX3jRMJjttsAGOqUBRUfdf24BIrScH2%2FqpmJfGNm78QQmwOdG8Pdf%2FFywE%2FO6HjcgyzwroWHvyzLjU0iRPWe9XYXDFcpz5Hd38h8KYnkiaqc5EX0E1Z8iukQsAiTq9ynRnvmzhY6qYhjirdjjRSlmz9S8hM0mMvuIWhs2GRK0gso5Hg4aGyma1LbOd9s7X1tmy0fTEYnAJiabYcIpc9q%2BOcMYFc1YJtrll8W6a1yP3kzL&X-Amz-Signature=844ecfe6f60679dc6eb8971c4d6d24486e277bba1ab182905719be7cc210f4f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
