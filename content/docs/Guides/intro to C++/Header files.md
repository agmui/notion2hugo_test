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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVYWDFG%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl9fnx7O2yCl%2BWKYuQ4CbPTtG9%2FvJgN5XyJC5jyhM6kwIgccA0zT0c9TRIgvJH0QnH0xz0YSJu49Dk%2F31cDFqV0y0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe5nKVme7u3nAAsZyrcA5mOa9fUaXnjnNiu814NLjyPIIh%2FQSd8OB%2Fz8T5YWmUZZiVufpo%2BjKEG1GbnPNRNGnkNqX7ykb7oNNVjZ6FKNlMkHsPjvlYKTB3vkIub9owIJij8q2vs9nygwILDUK7UDZWaBw%2FbGi%2BcBm11q5iqS1JtNHEoRv9TvIq4vQmbt2finT2MuDnwKtpug80QYXJTX2hzZjZZT0ZQhXOebhXueM2BTTULklUy3oAD%2BV3Bg%2Fb%2Bh4GV8w2kHAQueORjPNW7k%2BELNvou2MSaUWfFXLaQms5N06qloirVCnxP%2By5DIqk21vZCFv%2Bw4rbp66NyiS2Au4e%2FJ8PJlRDI4cVY2AxnBH6%2FXjVfK%2FwVFfLQonSiae%2FnqvcMorv0qIo%2BC6vEHbfkhEpSdM8lfoOahyb2eRlN%2BcAARsLec95NgNbvy0YqzFoXU3PMFV5vGMrf7Qc5oZttMyVc3XK8e6z7gjctBb2I0wF3OE8r3vvXHYoDqtUNglpTQb%2BJEnl8KJoM9%2FqgEUBwjbxdoeqQYY7OlxdE%2FXhZ8CYorWIZlCnGyDL8CX8vkhAYYnmEb2UJDaFkKI0lwjTqatggmlAz6CAuazYiRX3h5j7dPRi59v1EheOxSYjNoBsELqYWawVpRs6NVgTYMNunlsUGOqUBxc%2BkJRO0QJAQQMOGeveGeokEZfLAOUzyxp%2BxxDvAh4ShkMXH%2BVLs5Ee%2FFFj0X3u2TmHtSfoRhMZIw4pK4S5qr8XT3RxGkLo7D9dVhpYO6xwhtR5r7g8Vk1BnWnlEi05t5u9qGA1IgiINQMhls33CQkPJ9CLrtqmByRRo8X6jxp8XpUdp4thhBmMfSMTGHntNKkGA3sll%2FvjBQkJGzoTSnQhoUYbp&X-Amz-Signature=a27f3edd16d71c38229510193ad7151e657fd2eaa75f9c47adf7b2fab2475e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
