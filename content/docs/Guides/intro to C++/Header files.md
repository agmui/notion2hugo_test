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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKH7NNS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlNELLAfF9aKU40Z75fqdsovVwzkCS23JKNJA9EUqe4QIhAJcHwJlCx%2FVBE6fBZ43kgZABJvmTCfpFrTbes8ACCVeYKv8DCFcQABoMNjM3NDIzMTgzODA1Igyf9E3zI91NWN9Hek4q3AOiWVvmRDj%2Ba5o5hoa5T11Exs%2BTwwB6sIUOJHN0QxgNidTcgZX4usascxd8sZ218BED5RmCv5DKeY1K6jBAsrhrE2psnc01z%2Fjms6Rbhe1ecdim%2FW5MeHUYjpVwE6qOYFk%2FGuZn2Wj3GVunPt3RdMIWu3sAXwX%2FQpKJsuElb16s73T%2BZlrZInWVwhX6PCuZfFhtJYL0BgeX7Ye7GPuXtNmYtZ7fa2t5jhO2QnTGO3dYJWuM43i%2FgIm5kN3wYgPtVml30XGFqzcA6syLZM3Twje%2BVocMoDg%2FBKplllH4mcNQYLsyXf6z9ciHmQmM7s8GQL9YPn%2F6RS0zRJu6zwmEwcGWzGzlD4BnxiY7l83idcuOhKEQtzAFYRKOkny%2FwgrB59FojftNg2H5s14Zf0%2BoNcJOgJtTF1cLk%2FAGpsk249%2BMcKxCxSjKF16nuqKGfVtJsOD3hknkpPixosXdkiFCFE%2FUmMIhIQJ9k2XKUjB5MKtKAuydreK6%2BqQ799WHFymT9Zmp77WQHqfktMo6x5QINxnr7593mH9v%2Fs1LbDwnu2TEb28Towy5d6Av5NPziyEsr4tBIj2mSRNJr8GgXl6szB4yiTAMildKFa5nweRGXT0ihgkT9kFJTPjQoOLtQzCcxKDBBjqkASp%2FiYbLC1eCz5e3hqKGEqNxGr3zyTw%2F162136Gl2IZGTDbMNlKEl0KgpKnwbfAEd7DWs6C2N6fmqC0NE5aD6l%2B0dlK4e8cXlqPe14o%2BgFx5dspA3TFAthA9qlHI5idTPnZfEbsXliETmwj0U9iqANY42qKhz12kpKfGOJM17F1AKPNd5In1pUuTtbIsf3VuhoBbqkr0Oxk%2F2j64BAY1pWMM21Bi&X-Amz-Signature=5fc56726a7f4e08c4529adfe3bf3856107e968499c85e60f2d50ce27a479271e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
