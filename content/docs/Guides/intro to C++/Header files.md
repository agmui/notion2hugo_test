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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQO6U3J%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhF%2FT%2BwC9lZF0XVM2S6pL4eias1hQY7yB3yr7h%2BJh3YAiEAwDBPtYk9bJQzrIyaZRQfSHQ%2Bk0Vgdw%2F9kemMPOvnLZwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxgyp97BJ8PokpXZyrcA2WFPs2axGhVYac%2BzK6vTXDbiNocxfH%2FF7szhsVpKQGCqTH0hMBj3einNSNZ2eVqW8PaZRzbgQ5kqOOEm8fp4AQuVAsXnrtpVfA7bvrlxH7%2FaQtUR3G2StTa9%2FQQ4OHggsGLNkWG1Vxj54N7jnTsziuFcnVXVTujUvHHwJrlq7kPWQn0kEetz8aCq8da1d6ZRn%2F1HBAfs8ZpSJE43CTPpbL2QE1i%2B3jNdxc8k0F9YlQSCpExcW1jkEfUQGCzgQ%2BnmUGmA%2FF1nqZZWh9ATkqeVcYgALrTvGCZpEtYkS4spJV7Ubh1r30y%2FiOApXlv4vPl5Z%2BCmfMC6yCrzvGysEnoOjqn7FUNzGAuDWAib%2FS0NannScfqphHh7BZJSuDkaVtSr8nPItIgqyEYmS0DfsZFWyKK6noDMLkTdpA2%2Fmwara%2BJzG77h43TU5hJW5TOjzzTLbJLVHeCsRkVSkPkjjnXlWLW7WgS6KQdNbUIyFBvqN%2BK%2FCAS%2Ftuun0HMSk6pcgT1O15oTYmNOfIpxKgyW0M7tuOa%2BQPrIFuDTiRvXmniIgFJHa2CyfQ8V1JuYhELLFlELz%2BzD0K43vFh5bEklPFmU75STe0%2BuAwdCJrNDmhcUpQT%2BBLkEyTs2kH0OwDjMLqr074GOqUB7lxvbvq0qj1GDK3IalVfxsJHnhaowwUIuG1dLXrc1wTPyW%2FlOEh3IkQ7lDgARYfJqsjogobryoh0HS09EET%2FsBrmLmUjpsPcSzonFO5bl2a8LP0QfvC0btd7SO1u3XJp18%2FqhnSZIYUXCnabzshngvA06JlpOPjZ%2BiLOMiOhJ7IJOwU5ubN69K9G%2BsQ9FoE7ncRiMR8gT3G7eG60p4O563EH1xXb&X-Amz-Signature=551425a8fdfe30aacd061daa0ed6eb5d3af9aadd34136b30a47a183593da8dab&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
