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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOOR7UX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEq0Vwx5cmDvae4xu5pBcB4fSfXEE2skP6e%2B4KgJ7SwEAiEAtfaD7R%2FT5%2BTxGBlcfoOQNdAUyw5CYFMe2vlkgxGGkUwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNUzj8Yk5YP5W0KpaCrcAwlv9iBJ0%2Bd0PcnP9tpRj%2Faohx%2FI1KfyjsjcCxW4C8Hr9C05SJ2yOacJ4GSU%2FotXwGQ3uqesKzRoxQ9iYW2NZpIZ29Ke2QuBt93wnRBqgEsnAUl6OVKAG%2BRiOLKWQlaKdO%2F9hGHvg%2BV3HqLKEy9E3%2FB7J7hEaKBST%2FP4NfjdvMbYMeNfW%2B9lFG2FPMk%2BZ7uHOGAj2kKO5E8%2FV7RlUmMxXX2eT%2BOsiXqoLy92IYBxTUqkZ%2BamyvUlPcj%2F2YK0z4zji%2Bv3eCMFed9t1jDOtBRJN25MeZLFsnbUrEPbzjxvVUT3NMC5eEWKEUN%2F1w9l9UZatASC22ZvpbxdChS1wx9083nYIoITRZvR6pKBjQFYFMv9BKwCzm%2BiLizsyWM7L1prsu%2BTbgGicSDcu5OPs1tnNRO0BvDhOe5hwkpcZFV4NpKbJEAO1qwRjpqoMfTw90EfEB0arHteKP6ZIyqYNUac18pzr56FsIP7rUhV529g8oU4CjXXyB0fJhAxOUGvumOQyw2AJzfcSHvedHluk9NlmGJ%2BdlHa4eoiK8kYpmc%2BoiYPFKFWk9Gsm6AKEM5XWuAbIiHDoUyPQMPfkXNxaGowudFMsNUmLXdUFIt1XpYbFK%2F3x5h%2BimDsjNJcOcEtMIrmicIGOqUBEhUEdxdDHMxN9jcD09O5qKcgjkuxMucV%2FPF4QDvIFrDy5%2FtaU1AiOmcIK4CH9eYDnDkVR1Tde5zkCEBnv%2FdlTFuqtJaf2KE1ppXRvtKtR8OWCEZY%2FT%2FbmdsdZkxz0m0sgY3pIogUoCFqqlXr5IGq1tJLDftgKiGsB1NLe%2B4xuQ8Y%2BXEMWpKTyr2n51B1%2BG8bW3z6ssrn2D49OqG04vOG82EoxXTP&X-Amz-Signature=e0a7db131d58f14a276d01ae49c1710e08c3fe1b3abdb00528d4fab03593562f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
