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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ALOTQT%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIH1U9kIPH2%2BE6PKlK6uy6FniadTCzjjEvLLcJ0GNtvIXAiBFOeDYCYPMIEsdMFEOeGBnnCn0iVUYo1CMn%2Bn0JQuaBSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMulovpyeZfNqteSqSKtwDtP%2BVP7UwMqCYbuzwiu9CJghRXttYtikJmhjqCrdxB6PMnqT%2BKtaKYEfw65I0u%2Fm0M4J8YIzfGj6c2iuC9%2BkixqbBboQ1ClbQMAxvDB1g1%2F%2BU5P0IwFGgpvyt0t8B5HK7XPlYBNSuhmm67xAVSl6accFYf%2B4X%2FSd2fw4xXLBKUXY%2FEkSB3NUkj1Zw7992vLvuBJiryCygVgdv3Rv1v9YaXwT9DQOo1raZ0yBptRtrtEsSyhe5PPQZKFK%2FUh5zmKAZqt34tyFo%2FXjbaPEhXnIZN1t%2BJ9xwPDpMXyR%2BfU3PSnEMWfhRli7cJD60eX%2Bngj2dU22EDPrAkXfTDWZo5u%2BI%2BnTOxAwucn%2B%2BY7TULnzKDG98qfLXenifgBYezPm%2BzNhtQNCT0O2WTxFnykH7XRCtNLU%2FRS%2BfFPDeWB5MalGUPn2IAGrtNWuTaQ%2FqjI%2BdT7x2tn1ZWLr%2Fpe4P5QaNxL2En%2FWe8gHGDtkedbu6Yrr8tNyGibbAj4U5T6nPK2Lf%2Fo%2BOqe0r7lKNUeZBWAKoRn6s7NO377Zm2Bz%2ByX0JE4DZEzMfcAAAkO4Nvcv%2BUG9M87cW3KxrvGL3Ga4ODOtsETdK2j0n9a6GJojz8qjB9T8kenBeG%2Br65JlCSO0YT80wg8K1wgY6pgGWFgppvXu3Y7eqi9pkCyDg4sEzsGExTW7HuA5OK28Yu5f3Ubz1QT2I4rmJw4p9%2FKPL8xCntw5xAHmwKFfxszxD0Jo%2BYmCG3mItI9qlHyHawZASTQPXMKloZrbfZx3281Etj8IDDlKEy6XpYq17OX2HDkYt14rHfJuCkBbKE8qgTD1o%2FXNF1FPR2jy8gWV%2BIOXpDGjvmS7B7S9uL7jvvTfMXlyXn%2Bff&X-Amz-Signature=31d60ade44716a42f956d4f100f6cc51017165073abc9f142806d2211bbc7c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
