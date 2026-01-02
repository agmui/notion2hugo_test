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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT75IIJT%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDtZx%2B6%2FFQJbSB%2BOItMsg8LfloGEHMULI1K4NW5zjXQtwIgMwZ%2BthEcNfsNQUIhQTQRsS1SwnPjWi1p8jxxdNPMgcMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNl%2Bhy3gjmo05Jm58SrcAy4bnkpkxr1%2B7Fc4g%2BNAPR59J6ANtVfJbWs2FgGOSS2M%2F2kteY98Ch6zZPetScKpP6PncC5RzN1GU%2B8pInUnXB85u6dGmloP08mgoCi4J1soPdA3cULykLeLMurnbBi4j7iYJ1TN1ebX0IA96Ibobk3jAFxMEMHb7BIUY%2FlOEsPoJhxKz5eitn%2B54ofyA4ldE%2BKtc33EBi9xT5otMBhRcLU5KKoLL5z8faqxXdX7gLGNxfZXbmXhExpUyK%2B81KcaWLdlWoKQcH1tEn0lSri6vfdDZ4twDuwNiMAFSzCe6Hb%2BIQi72UBrx%2FhxnxYUCuuLGNhp4roaksLKD6wWT1YM5qogc6S8EdXlOdyc6G9jgIjzLr7%2BVU4qBbLhp0o9pRkpNIz217WtKGMbzXQJ%2Fk3hdhfcQ0Xyc%2BB%2BzHK1OGZEfW0z7nun%2BzsAi044jRKfLfvpcAbiSKLMYvsfE6lM%2B4p7hmn5zPebJ3QHiuhgxrVDMjZoW5O8RcN9YiIFWA4oT%2BJSDMciARTMcP%2BneMWHdqqcj2fTmngSPVZWYybkxMz3DxbPW6nYs0%2FpDvkhvZb%2F6kMGiUaGbM14GKjcNuFAHkpGd6%2B51BkGXMvfVKf%2BMDtoup37DkZoArGPfLFy8hZPMJ%2B73MoGOqUBxmsX%2BcQWfWhvWwRXMhlSsNXZVKKWpBJhd%2Bfro95W1CR7g8GGjYcHOuxLdiB5eva48z6V8uXU8RmKOhDYUBmRwS7e6brVn2Lu9fxpaMkQT2BQ3I%2F8RniTcNz%2BD3GHU4C9FC%2FUvmMOTzzj%2F1pIbvQmLry63YgLIxgZnI44KKR2bwxooZWH0%2FMqedJxC2gWogr7OlQ%2BASRemVOYsXaB%2BhVljwKHp2rk&X-Amz-Signature=bca2a17ddfed2dc4877cc9079bba0463f06171aa2880b44c68399bb766c0c78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
