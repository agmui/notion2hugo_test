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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVS4NS4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXTRYMjMSYf01SdEd50zTuwOp9Z%2BawWH8VqFqWH0%2F1egIhAOYUhKKtI6fQT51hUYnkUmxoVTwgCiWzfGbDHLTrxIKFKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxumvJz7DNvv6%2FHU90q3AOeQ3C4tRC2MvE29Ty5ft9NRFvB7SXZwzu%2Fb9fktV%2BDx17T6dq8hzSvJ4x1XPSyQS3vXXq%2B%2BGmJIap0W%2FWtefLjAf5vzq%2FyJyK2l7oWte2yKMHF2rlAnNO1riWmze9bbxg68E2Rn0yZDmo39uuIeVtX%2FrhEln2%2F06KrwEVGxNq0fFp1ELWOx8hYe3MQuZIv95G%2F%2B%2BfYJgOApD6xn%2BWu2uueatioxBj%2F4ZjHq%2FO2zjcud1LxuxGUq4Cdxz4uSK%2FZa5Ao2LY6bsFNKTQqAjL4N%2FOYVmu0%2FfVEEWRw3K0s1Zg4zgAdFEHtnL7oQK9GWaBB7oc0y0lvuOOxmgRYcdZLbkM3cYlG9XEXhjp%2BPs%2FI5OsnwiGlFyCMqygD7CjjAh%2BlhsHqrlWhIUUJXiD2CODzMECM6E2%2Bn5%2Fcmw%2BdgbIX55r3an%2F6x%2BBlRglASZKvcL%2B%2BkBcjXP1egdW%2FR7vuM9pUc94l%2F4vb2VQoMqtUZBzDWQTj%2BNqFq2LB7d8OiveC3UzKCoR1o8ALv5gwWCvsTJOJ5UKH%2FUNcBqh5AJhQFtBw2h9tNyff3Fgswj6G7JnMYWVGfPXSmYXVVugXzIPh5o4UUdjcGqZQkNd1uXHLPBuVDWzraUT7dTZlwtcBn2DRuTDq%2BaW9BjqkATQMRjA5L8XYbcTxMoo%2Ba%2FiVk7IlyIsGHGiMj3PPR4HFEgJxNr1sNYO0oarx5SuCwyZ4LHQ8sllNClpY3FI2og%2FTcRVTLKPdkxwxk%2FDfMkhNIEldNHw96qFmMZcPSo%2BCZoeyYpWl5lX6k%2BsRoe38tsaBAyPtC8IHi%2FqvXWywkFNGMCLtbtgsU2pzRfr3UI87bm7xGFusG4bQqhTrNXEeX2c67usN&X-Amz-Signature=c83a028d246d7256c308328a3ae17cae616f5252c09e5713183420d8c89c6131&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
