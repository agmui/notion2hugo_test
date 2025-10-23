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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBTWC5I%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiSTAd57yakZT%2BzIAVOuQ%2FSB%2FeM%2FNtsx09%2Bq%2BRRO2fYAiEAgAQsjz15X%2FfAbvEQFs3%2BxJq2RWDHLxOQp1tW7E7ucXIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGEJ6sxme2DweopDzyrcAwB9p35o0xguPH47FOexSY%2FOeTmvnCDqGz5oZL5KapcdTjG33EYe4v2zQMypmwt1WFmB9NNvofxsYaqoQk781UvZgB6KYCsI40fveBmQJicJ8zSl1ltNlg8DfPDRxjCY4y4u5SgcWaY6Abjjv2BLaYP5MV5UlK0KIBPNZevjcquMPXpBsoyVj%2Fv%2FgpW4VCNsbeV89wrA1PzPgu6qYLbgGfgD%2FrDI2yzQyt%2Fo7qGPY7KDyIJEVLpwF85I9H0pYMYUe5xssgNj6SeUhCvdtXP%2BSKJegQWqg1%2FSddhEjEwMeTiXYpG2qYAkIwTMD4gVAajqzWriEpETeki0m3hcOeiTQrBnJsRVqUKp4q6AS1IO8MaWEGwuHFi%2Fjz%2FGNW%2BRT0AYVt3Nj%2BPvv0zmrf%2Bec0abt9WyMy87CKdzlqMxchK9ZjTWjRtYjexDkajB5l%2FFTm5NJ0bP56B8RsyyMYOwwdArC4KNrs0kagiroZ4sE6EfcM0cGtusQhfOUTVMkp34nAf0MVDn1%2FSjpNtdi3vk9Is%2F3TUqwJlJgtVgKDpMN5ucHQIN%2FU1rQ1TtrCLxo4I6gYgdgey7csyI5HUXo%2BB2c71XTAqUYd%2BKT0R90Hf2mSQ3pBuETfXbxiW2a4CawbvgMMfw5ccGOqUBXIhYETl6h722FzjgcV1A1AoUm9UoET6YGgHyd2Ia%2BolFDagXP%2FZyot7j0onapa3RCqZFzgdKNgfTz28X6Yo8ytTqTzj4MYaNRkylg8bVmZSoxSTQHx7TMQy%2B3Tcp%2BzICE5fX76ji%2BanKybdbgqnQqxNF4oD8IbOSBjujvzxoGupwrz4EdWesyVUHtL7%2FHNyFdEZciMEj8PP%2FBz9Ga3r3owAVhxTO&X-Amz-Signature=4c7925642c7587aa307f1777de580d19fc4e02a6e5fdeb81c9863f3e20aa4e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
