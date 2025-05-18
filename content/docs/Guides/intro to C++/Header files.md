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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GRGLQMO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHynfC3TPqNgIUc%2FicSb45QF8DvRH95dbmdKuV4kFJwlAiB7xX9LwGJ2B%2FL1cxPdDsjG%2BMnLmNOUt8Bhng87438a5yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMqLHTwWwNC0QdCehkKtwD6u4IAgOJMoDM%2B46jB%2FhBztgE8s23N%2Bm%2FqovFhX9hC7YyLjuCIxLBt93kAI7NTKVQzcXdTWC1QReP%2Bl3DA81V5Ma5JsCUP23gzziQi9%2F%2FfFbhl%2FfE%2Be8imqXVw2zaBvIxMLj%2FDA7ejbf5ilgzADTromoA8NowdfrU5lIr8m6aD3hPhLBY7YvsVnDmuDaEmFyvlUQkxdgEK%2FRDbPkGlTG6pjhI7Kpcw3uW7zxrYxZq3zWXXfxv5l%2BNY49eWmp30GijfQthohTQjVDoJw4XUzoTiyiDCgFA032DrRN9W5l%2BfA%2BmODLS8EN%2BFNFURWzgMamA%2BLeAKtFh7kH3O3hfjw%2BrBxAE7UNqY3W%2FgkYg1A1T7MV3aztZBVK5LIuEZn9QC9rUtYjiAUZEV0iPMLPBiVRTbQG4F1l6M9VUKRe87gGMWLBd43HPYS9kugw3ULvsUyl0R9Kw5YypmxtoeGC%2BdfwrygojCStfrS%2BM%2FuVIcUxwS8I1cR5WkNr2soaQNQx1%2B8hNjtfm8sOOSXa8uKzXID04FmxSsLJO%2Bj%2FtHkqid7wiv70AgmRGm%2Bbuc9fM8ERoLxSSxQ8NmPk3xe7sV%2FqR9EPqPu0rVjgYC1mG7pFvzbZH6OPmUgH63mO1f7gI9U4wjp2nwQY6pgFEpqKi8Te4Kp3Ff%2BtXnYjzF2CHvm%2FQu5KTmtaroFUHjfNkf8u7CLtIpc6Y5Bew5BS6LGEGyj%2FGePt2c2JAsUFAnsEvU67HkYN5LRV8VhMBsmGDQwejH0WWcDBd%2Bnu%2B98dc8lsJzgijX9r9Qh4449SgFh8hcfDnv4RXyzTTR8sqwkXmoDbyp6Jxi6u3ax3hufTWR5midF671g7f1VnDGtOQD%2FllbN8F&X-Amz-Signature=65a28d8835344d0c27336e77ea574b0a9c2dc61ab27e532fb9db1ebd5865eacc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
