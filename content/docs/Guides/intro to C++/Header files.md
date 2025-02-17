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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUUYZOH%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC%2BxnorkcqkAo1S06QGaKD1Ua2hdhnX7wkDN9aERlFQVQIhAIbHeT%2F20MVOzGvaFjgz%2F%2F5nH40%2BuWqZOO2Aagypw7CyKv8DCHgQABoMNjM3NDIzMTgzODA1IgwDY%2By0zX%2B%2B%2FgTpivcq3APctearScT6Y5Fo7ffkLiyC1wXhPOtA5gayJLkhzwjjJYIqn0lnp9Hk7Susxg9moF1%2Bu7dBrwKllmwoprPMCnVkakuYCncyXzE6djbFAoHHGj7%2FSdIdo2Rvan6hrOLUiVw9eyhDuQeOqq5tUCO2QKHS9WGpMjBWW83pkFRHWhrbBSf1FbZ8ycQPQ9m1oZ%2FpkNlLQQIud3IsUV3p%2FBam%2FWvSNAMaUrFizzM4Zn%2BL4%2B9ucfzR65PsHksJpq2D%2ByZlRHWT0yZXySXDH%2FdGt9A3sqN4RUBNxGJ2n%2B0mToTuhxaoqWXFDsaP%2B6hAQ3HTlhycd%2BiLh%2BGEXM37X7LJsdLideucZQBKMDCs%2B7ZJru6yb0bd83E9c95%2BR9j9qiS41BGnCLEMJ5%2F8%2BI8dgWGfjiEbDQlJ9e4TloAWI9czv%2F3AZ1j55TX8rpHjQPo2aIHKJE%2Fnjoc03bCNr6f86mrci5qudC4AvbT9kAZivFlxRF7WR%2FxukSRYCYUve2TOw1VXTDQY%2BDN7oJr5DaegCU661W2%2BQsllANYvyVpjUjKcZUJ1mwtW3xeDSagZKYNs%2FKxqfb4dEBDdUoT%2FDx0hzfNGYam1hdOnQhHwtFQ7w0Sh5hqIAhQHwBBFpl%2BOi%2FguJs%2FqHzCpls29BjqkAX3cni1%2FIDmD%2BCoc%2BTDt5YYeq7QWc65XPbfR%2BNhXjQFAoierlfu3I%2BuhWhZpLh39ThoRiSBn2Dc10TRP5VWGbBJj4IgGNrdxB3s9WCUEn63b%2FlBZHt0vIFgqvGZbbD3NmJksRiIjMlji12qVbE9oLXTOAAGgWaUUNZ7z%2FCDRU2Jq4P1e3wQqXL%2FpP9wviP%2FR10EvvuctX3xuRoGTspcy0G8%2FrJ%2Bx&X-Amz-Signature=1f0e737d80cb87d08b6172814c28c53c5c6eb799c1ea26948c954cf6e6909372&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
