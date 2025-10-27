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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635Z65ZBI%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEY7HJRwYAwMwgAUmTzrpXmkPUCH%2B2yRPnGSxbSE46VAiA56ZQsYXMcCcEFq0w%2BjVGdxsWoZnD4sU2t7FFOaq%2FZ6CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhhjPT%2FM5SWhjCMbzKtwDr8Mp%2BzX6sUCJadBZ9Y18LBc2CTyCzPZAbQWRUCMvE2Uy8yFgTsDFiKz10rB5dXBvaw5a5Ol7kSbeni0peGyIP92P%2BsskzEIzX9hau9dzYTYjTk5JEzL8IAPSC9EZU0SJwlMRH7z21bCXmKgIFbeIjXGe0vR2lZi2BENqZcdGqR83TGk%2Fpc6EBAVgoqJLGWKjUYA2KGXBVMHBYFArV2X0TEO06VcXnGNWKNrWz58BJFKY7CUVSOJZh2v7xC6ApPERiwAxzOZe3H98HxDgeWfGeDaUOBAbi4Y2BNkHXzMF6IDbE11X6S%2BUdLuRdmnfu6PXMuDag9pn5H3g4v%2BIJVxTnz1DX20AeY8MEmHnEu8mSqU75XYXtl%2Ba7v%2BuzOGzP4RM7%2FEkQmu1uwELbWMQE0YwuXxD3zw%2FqWaakyvgwKILIv1SHrYbJO8EYkBuErnB1tY%2F8j8d65O33rEyWF8T%2BIqJx6TxcVPxLlG575xxKIZqwK8cYuwTnBamIBa17Yy0SBiKB4OUKtCM%2Fk%2BByRf1kGpsWcEAaDVy6JhVetBwW6cCsQPDckdTmyX9y%2BAJ0EcAT3y3BQKWifgRVBKgVX0ccPIoBq%2BJGfN%2BymyDfK0jY22koT2K7V7aC2lJefmPuG8w3Y77xwY6pgEY%2Flph8ZourVDFUtaJIlcqfJc851vrRXTxis3Q1tBdrIGIMaseezuFbKPrUgFfeXfZ29b%2FRmXkaYiCJmxQgcwFee2BZfUuFVyuIWalM8yWw4mjmQjIp1vuaZNcrQahnOdPFpd3brVFs3DmPv3%2BpSWv%2FCPXpUFOZXaLxr04%2BcMq5ewev03h2v1TqheaRHSfB5VBWovdtGk86gfJNPjfmjioXDn%2B5h9%2B&X-Amz-Signature=fb748ca7e8379226acac14afa4db321ae471bb7d15eeda9570eecfcf8cddc1a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
