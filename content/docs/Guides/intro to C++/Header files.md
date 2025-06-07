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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWKXQZFI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5AjTk%2B2J2chFMHPaUSoPmU5MMvQ2Lbq3VK%2FeZlDfjsAiEA4tZpXFOc8tYkZ%2F7895IL2vuxZNJhuzvIXRs0cLUSie8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDILKq%2F%2BbC6HJX4dIZCrcA0e6hiUInsyW%2BIJiDK5i4S9ryqCyEpqGwPrJ1TD8Z%2B0rl82gvmB9LAe1fiC9AD55nPEMNHslWzQ487LtSN4dZDLIYu6uZbYcl5T1IC5U19l8ZI67LfmmM2%2Fy50FhbtbY6uecJuVgWBv5O6OluIkTATw3G8N9jbPQmfjycBFNno%2BNRphOk36hgBPNLbT9BAPM%2F3enblrh157CGTfuWGVkbkl8XAey4Q9XWItpq0ztEc44g25xZRlpITNNygKT32MF53PWSaTJAHgLyy%2B5PAWuO3dBoSf3IVEEIc50eg7h3Zs7qN2q%2BL1yxcrEoCE8jC6VbUCmiaveae%2FESceMCrxYT2ocMYVn37qvRriJx7ePaqc9DVmg21t0hoWvckNW9EOf5H7htxRk1FEDtLvYMbrZyreMWQlHgXddCvQFKNZYq8HlaKtCunJcWDRfPAmk%2Btg1FlyVC0wn0FrpMbzYLVipglhWjN5eEfVTyVrrjiWnpilfiqgJCVK9O%2BA1u0iYH1vSuD5WdHlBRMSFkmBUcchKQ2fhY4bKj1dRcN8NGULpCMdl%2F7gQR3suJo40hAeKwRdF%2BhzmPi1rdF%2B3jLylCEHxKjgFZLv6S%2Fbz9M3kinrYPS8%2B46QyCAmmP1KSyKZPMJfTksIGOqUBGGnv9Tq3RfbKzAKunBV8Z3GrEbH7fQvdJVRrngyH6TciDEhXHGm%2F%2BN3obCaBZE1mCtLs%2Bfpx%2B%2BzopnaT6B50FBMHvt0gwGjT6PFE%2F2YqFVV2zIWQ8LalY4AocvNph72xsDNnimC9sak%2FIORLEzhF1tDFURmAjqGZJ%2B7Efe0PghIpVJ6huhElLrN8d3%2F%2BUhILuxnMM1npEhSDgcHHT0shgtYigeqj&X-Amz-Signature=af9b524ed759a817a19faa3d627bcae786beb9b6208ee51b4cba8a9a52d4eb7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
