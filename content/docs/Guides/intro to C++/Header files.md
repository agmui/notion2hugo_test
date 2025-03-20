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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYYFRFF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBjQjR8ihfFsK7fNUSfaT2wSZnWE8dcVJgM567e%2BO8XzAiBf18fzAtYKt3%2FGrOkQbqOWexFTiasngi78P%2B%2FUAThbJyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWOXXd4CdJEx4AX%2F%2FKtwDrMjWm1ucC9ajsszn2Q9wy2Xkvv%2FBAJJrNvyzhp4oX2FGYu9%2BJv1rsy9d3JHWYo0y1DZUZg1cXRs4wfrL%2B7FQXosKPjWzhkPQLpfhIsH6e%2FhZt3alrrgOiBlQcOQRV97HqC8YJDv1%2BEl0J4GI4zUZkxecNiZf7l%2BHbFI4mfYWlRUyvWQcK7tToHG6bc10sX5%2B5D%2BdCGSfS0VOYN1zWY1%2FkunewpJtXs5QjTG7FX%2FPLnLv9JxN4Ole7QCW6uX26%2BCPpEhst7Ux9QrhGdXF%2FXKz9czjpYDmgn39amkwiwROJ8IasIHZuF4cUFeBHA60VgD%2FKeXyCwN3VYASfsHJqAdbYoDjCttMJlMdUocHhHQGtwp4VitHKMba%2F91%2BLsGPbmx4hlyp5U%2Fsmg58MoF7pA%2F4rqT4k7aj64ju5lwFHr%2Bq3V9Tt2JKZ2c7dYiv5scz6qo8iG33RLbz5MgUXby4O1WGz5AnSo5Xxhakkijkib5owMRyti2BpUUgIlF7k%2BgJZoLgQeBH5I5XEJ4517iPsXY3g5LVCrhHgVzaQqFgkoJwERI4rch4rHEL5Skug%2FOFuaqFR6OkO%2Bggm43IIn6TiVqeywQG2qkz5yQLc3N8Mt3AXWBS5syDjHCx16g0vK4wvabuvgY6pgEN%2FcrS7cnAuX5%2BsoInXqguhGvRNY%2Beb1tV4ghSEB5rZwxuHp4CD3X5WpybTaTOeUNFj9oFNi56MtOnCLLSsNkCnKrwfgEPHCpGIhmDB%2FqHGfjt4HUClz2MFlqEsw7usm5tylGhn463ogHKG80K188LVbKr%2BWkFkkOFCDwzEzC2PuVFQAefZrGb8Panqx785ZrHbXy6aIIz%2FRWBgVgTN%2BAjh64PoGKq&X-Amz-Signature=ac1af7791d490cc5d4ac1c201eab17ec38489845f663f50dbb10bca8f1e4feed&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
