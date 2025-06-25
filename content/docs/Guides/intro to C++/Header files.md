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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRPSSG7%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCzZS%2FMQCLiVr%2BM50xAahOz2npts0h2v%2FwSy26eHwSKYAIhAK1LYhun%2BqlaRUKT314WEH7zmmKNxn6pV07BAjhL08EAKv8DCEYQABoMNjM3NDIzMTgzODA1IgzqAGL2KO44QSNvuLAq3ANat8akERtSi427VKKuV7O4RMcxDb7kHET%2FqzwhL3nmpNi3wBccjLWIKc8xEZyM6NCFIDL6f9p9Yv1cp6U08%2B1s3NOIbosW5Tqe7mD3RGTg63Q7qH0yojASogOU28%2B9fyrpYRuGrUhkzp7KgvagTxARB%2Fbo1LZqFbE%2BACNbdvNpLpHsMi3KzsJ3QAILLzA%2B05TSHf%2Fj77FgDh%2Bshx4i2b%2B7g8uDx9oMH%2FM5bLJ243WvLAPraHuDgaxGvGE8Sa8zNWyrEoAMNUOYw6ATBSyJlysvvE5fVqmbC3fqclPjONr8PHhhQLfB4yaqR7XFkkRN0oI88hUxWk5hFiFOMw%2Ba2dzgPZqsUyLpl8U3NP8k5o6ZQls%2BBEvvpD339pfOga%2FHQX%2FxckdvK4My%2F%2Fc34YSAG9VCfpWB%2FKJYJi2NpiQpA7wukG6bgTxGZ%2Fdo0Ehn6BeRjXfYRrXr7hKSB%2BZrpbgW3xMdYtykhj4fViCTwD1gKVf%2BJQUVAjxIzVK9ECkqOo7eXQ76E3FzFEuzA8S46Uk06Rax2AshRDYqitNifC5cLmZQvu2IGkcXl3KFXjBG43WnDCTJnKq8MSuwzYmy6UP9IWTI5MuoGknk%2FD6FA0C5J%2B0QroD3m5KTkJy90lPDpjD27u%2FCBjqkARsiNQdK35yfVhNqt68yzr%2FMymQFRbogXjWuGKtZm6%2FWFiwwp0sBPWcMKKbTUCKCxMbtjy%2BvTK1aCZ03FKxbX0zWZi84DteriewPlnB%2F2tlh4RgEbnuh%2B3kTeLFXYsyhAbGXiM50eDGroqp6VVgoU8W%2FJfics0%2FuQnpndy8cOoP0uuOunDmJsdri91c%2FWVl3SOKedQeLT1IZLWCF15pTimIJdPkv&X-Amz-Signature=edbc56fc7d7dbf09a12afe1db9db6c8e789d68047b4ccbabdd82df9ea858105e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
