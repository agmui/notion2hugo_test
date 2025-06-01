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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N42K6UW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHSd3DjjrEOpmbqKeaBeXdx8zTmIqLmQnSJ%2FlYnKG162AiAN9G8X66j7YjGznI%2FADw1SDFXU7tCOdTvriQCdAJB0QyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8tBvUYO7oLk9l411KtwDYl5llyH3FD5V9Sy1DL%2F5y6RK%2FBSmVb7QORCU0j0Jae6wvddIenq0hN3IQA61dupVhQG73pJeRA%2FFfV9pJr%2Fjq1QBemqZULnKa%2Fx3AnzVEFci1cWdq69uK6ZmEO7U9AhImE5%2FG6y%2FnPBOSdAf2sMVnHwKxSTMoIkhEOIZfU8nlsmGgEHHsxhq0wMHBbcyp2mvESJHKVvzgBlL%2FvM%2BjWyIGw0St31a8A1HC8Hc4QSB8QmlYmx4mQMfJZe9ewUnGZt9pYF58c0OpD3b%2Btur%2BDyfdQTKvn8opG%2Fr8SCi0o4cixNeAtKcH5hxoca7gcOIWSxAS58Wx8eg%2BtNpXydvhVKA0kaVaX5Losq1%2FzVxBpEu%2B01zOe31PZnZKG7fAMQf8kPLGMVZdZQQ0d2%2BL99uEd5FhQ5xpGHnyW4KydWifPfeKEKSYg3orlYH5aP9lsL25Ew5bgf5ivRNylbbRQ%2BBdc7yoRvDxC%2BkHEK5lIxRbxYvEh3FPlvdNfoVrkXAMsZ98QC4fAqxxmKY8v36TzhA0S8pWiKcI91V8lBQfj7TNXCUNcIIGiH6mJdQ1LoSw%2BdMpUZAPy65z2LLVgh1NcV7Tphak34dhGX1pp53xhWczSSuc7aRepeOlOwklVV8KXAwqoDzwQY6pgGgVXmMD5pPRgmvLY7Ku%2B33Nsg9yTbcrC2T%2Bw%2FY61iXs7bI1430nzlIXUYDGXMm19G6mK3hmHJrgOGO0LhmRzL4B54IYbm6vmYatRG0ejtzGHp0cPm6wBN%2BOp3LqrHZkvmSciuUG1WAKjA00KxkHDHvk1qipRK%2F45U%2Fp5oGQ5fA5yJzNCeDY%2BB8%2FL%2BM0wKsBlOeQKdN2BuN49H8ME0t4q7k8F%2BvLP3j&X-Amz-Signature=77863013874bebee63691d8ed619ff320045af582e81181d72ecb6279e3e94b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
