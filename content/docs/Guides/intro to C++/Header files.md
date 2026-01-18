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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7VGQEH%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzQ2na0l1keY01mLYeM6KyMA6FQsUvCI7a%2BSDHgcVvKAiEAneLCAdCIkDX8bHQu3DsbtJL0nEhK%2BgqWPPMqneLzizwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDP5QPFwz%2BwZ6m33kfCrcA4dMDWmpeha%2F9iWc%2FS0JwhUuiviB5R%2BcGnpLYKddqkpZF8c2sK9ixl4%2FtWhia6iq7f3wdhKmxfxlnypnIoaKBxU6d6o0a%2BziSeRbdgatGIRcG700u81ehVs3IJObngTwOIyDk8NQ7631Xi2W2Piy%2F03MFRx60QoZAe14MyEW6RhZEboeXL1RxRR4HuoDxoaQ3ZD4UmKO3N7M8o3w6X%2FnMN9%2FYFCkFNtse%2FUbsKcLKXF9bhCUAw6QBglSLwB2V059I2Y5X4rJMLtmpab67e5pyGbcNhXSEu7ALE%2Fa15TG4b%2Fg1fhIKDifFSITqkGujRro0HkDxPz5dJtRDblrnXWNZ7x%2FlgG305U5GecwtRpcv3fv0XL5OIMW8gBRrh7wpTopLkKqKHyRq3RN85dOq8VKuEhnUcNbP3%2BAARSaslHTjP68a1ZxeJ%2B2N3rftw5tC%2FG6x8XJhTUXVPS%2BnVIOBBxm9C8C8LBv%2BmCw7hNfcHJYEuHh%2B%2B%2BfC7r%2BkEAuxS1ihgG%2FJoLUzhiQ7I3O9qsRc8swSIYcF1ZGbFcRUCowEPX6vHPHfs1nQMyWkeOEgDQjNymnJX4pnNay0aOS%2FraVmd5AQJvngl86kD1asFzTuFmQgifZQbRWZp35EGB0ZVXzMPOcsMsGOqUBVeYP6eMPpzdhLdAK74dKclZ0lO5YFUb0SSCsJh07eiBJOpceEVI%2BLIb7Sp%2BQ55L6X7J79ra2hArEPadHokrXspggHzvMR5B75yRTHNyvr%2BF6ZvCGI8IyD88Zx1ItZgmV3m1%2FMOTGsP5I0dckV%2FDAllpr%2F3k2hJF6n1g420GxCTsRb4hbO7l9wK0B0opRDwntNuJj7xIRz60OZNpM7lBOt9%2F3pqlT&X-Amz-Signature=952d382d54fdcd333f7127a0d374cfde50a91b322dbdde3e9a33548b919712f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
