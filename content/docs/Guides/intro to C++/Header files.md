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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7L24PM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDav72EdoKHgWGAKKPrc1BqPOku%2FwVyXfgLHXJDwstdvwIgIz1YQE%2F%2F6hfaGsviv%2F%2FRf7MwWfhG5Lurx2aqftVCTYsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMXJlUu2yLT0%2BHjJEircA52fLYCSvSQ6ut5AZEHFEaPjuKnD7CwglNyXjV%2FRs08G%2B1S%2FCQdkzC0dnFzjzS3dwhBPNVum6xlEjyzDx9THtld5nox3Us7xNsuYkXA%2FOelZRke5Xs14pAjnYJfdBd8fUdCYalCzg8J0AbVQXiVOPHjU%2FhXpMqLarS3OsTPfUYFD6AtzDBotL5GOTHfkwxfSoaLajxJ6LCPrRDiGrHqKC24dWWnj4R6aWzkkbNSuD06KoTksu9ym%2FZuiHj6dyaJQFcdHhIly8lviZ2hrqaqvoXaea%2B2cIjASBYlZwLHyF7TeK2VLjN9%2B2H9TuBd51iQhFsaq6nJ7w560sWHoRfnfwTMxpj1jhLMUG77TQ9jAGgTnbCcAMQWjYI0E892MbKEUtR8%2F6xNokmOpCq043Hn%2BQyKJv%2F9Bhh1REpLUzutMfVW1w9eKHabIf%2Fn5qQFtzuH%2BYu4cDvPwGFmgdqcSQEugCM5ADGlzlEJQhuM66Ws2tMw%2Bh8BMbH7iGaQPs9yLlzt7sLu%2BuCn89Lxx4ZIsBO1gqcCu5EHnz%2FCkR3BGK6eeuXEw2EjirOs67qUp9OGvnADvXNKc8LFZ3WL0rm5SyCNoQfJGUbJqXOiGiZQV1aCcBDQVYkLGKn2%2FR16wVVLbMIL1vr0GOqUBjlI6g%2FJtEILjTmC2i8BN1Og5TbdjylOixRjx48Ih%2FIa6qZoclDPrDMxO5PQ0Q4TlehmFJbBuTjzA56hTFQW1Zu1%2BD5VGj7HiVuKXryk5jLTLQWZMb4FGEs3U2TLTwuo0EV%2FnV63jkl%2B%2FsQ0KpNIlLlJ1ve1VJzzxhUrJzcP5zR2IW021zu97ekAphj9ycbdnhcLwaes7ArtafyWkOUV%2BCsT5%2BXpM&X-Amz-Signature=1e83867eb5ed9eb867540f408e88580bda493159d77f4a9a9ee4737684b33b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
