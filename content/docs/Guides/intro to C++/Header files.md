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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGW2V5A7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEfMx8D77ziTwE18RHSwqDurQmXZarqAGgmfgD5sQstgIhAN8%2FULoJXAnzzYtM8DTZ%2BQ6lfvPyT%2B6cpYrxIbZJL7zZKv8DCBEQABoMNjM3NDIzMTgzODA1Igw7sYefsJjNd2sNDhYq3APDDGTktVaTx1OpQTU2VpLSqNoMfn5%2BeWqi%2BLMfMvOFnliVbjNjj8pwwNGxzaDHTkNjFd3dZFkeVP9hB6rzzYFLZshb4rQ8EvJAPXCHa2kzY5h0Pfn7J1gCR7rMBtcnyYO8rU6bio4mMaTi59StJJWJ%2BB4yw%2BnkP6mwIDufhBRor3P67B%2FcBEw6vkT7poFd7cnoy2lXasyhcO1ufWwKKVWwiup78phQhukzWjLDz3iXhX1M61vVgXUQlv%2BQ7eyYf5MNbJSFz0%2BbdKxpDIT7IhisYDYPUSDQqofGL9FErOMdgvsgczHMFX19bsWsw%2FHdpidEEfbUpwhQ6LB0Uq7HP09gLZOfmwiGknmtHs6SD84QWTrwMWROwlT2cZATuQWgftSGZX3L8PgYeskds9wyzNYoo53H39ABcPj082vhwG6Q2lsfwUby81PVc1z0KB571ivcZSejxqTspupzHju8n0Ett9T9JRfI%2B5e5%2Fc%2F4YL5Xn%2BX8LX2VOE3njfLlVe0Zo6GOyXXi%2BDyyehEp1RzOjS7EW5r7zJhbNuW1uuJgN2H8xb8%2BkPHhPWR4K3nBwGMMDIhqnLjwWcptnr5c8svipxUfwKOGkJEFTWVU70pDoo%2BGD0UJqnr6uuWoBzsXOzD6zIm%2FBjqkAabnwPH0tUvaZKjYWW5AicB5t1xTcUml3F32LTR3qiMVkyf%2BhfMryvSYrjOFmHk3H3WjPBbyvkE8NNJbG3xp4Vx6Yw5MsTD5kWfHFexmJAskbkVY5vR9jVylDz7WqUei48O62Qn8jAt3s9b2%2BPPZcCDHxwAohhhvScaSoUbPr50dQdtsozIlhXZf4UEFZGFaguoWSemTpvsf49vOR6tl8AaX4gxS&X-Amz-Signature=4f5059598314bab5d384175c8c6834a0ede4938a8cd8eee66ce14e5edf5bd04e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
