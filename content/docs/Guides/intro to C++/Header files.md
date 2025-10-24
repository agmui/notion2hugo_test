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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H4ZKNI6%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTzW53FEHOltbXcyUKO1OEIO7l1Z2Yqypmyr3x4Iv47AiEAqwYBJV4hqZQZaack%2BoTdUPZQSuPfApkA%2BYHh9GIpzRsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNtOXTimsaxu2vKAeCrcA8wctHl3rByEq8NTZF%2FisTejKXGw1ZLkSvLumyfo5WsSFUjcWDD2P4WBXSyYqEwkHbzO1g9bmvkm4BlsQhGXzZ64RMSgAccoGjdCsGuRuVg%2FDEAu3XhhfcELfCPz5DJhVpYP%2FrmAd3ttVMAmpjLZm%2F%2FgHcTgTkAVEiQMQsFUt3cW3jlcKuN6WbHpGBIZEkeqnuGa7qGuBgArfelWMlytVcuTgWNNd1eonQd6LrwnIGdS5VXc7%2BcXUGMU2CSM%2Biv3LnxnA%2FXbkffW6AtUX8us0iWKRhKYVDLoJwHQHzrMOpRTEbF%2FUi7eckQSjAMAPJbdtbQXlrAeiW1VF3nqUlS9IJMYpPXE7YkLMu0TJBSd50dqWYpPxKXbhSi0cLpBs%2F4IbuQ2Hyy0qQxTY4yYgbkNDtfjCk%2BnTMKOcF56XDHQVcP6Hppi9hWXn8UCv0QS9yIc8Vy0uWQhhj7iLNvgbAbJ5msqAIQmKcS%2FRdEOdtFMxWf0cgRTynj1LOoHoeZ%2BHuV%2FbjDOqnP6QYRRNDfJ%2BfIHE0z%2Fq0mTrqztUq1bq0P61M6c3hCzk9IZTBvqtELiCFSYz791%2FpjtbojMRNTSt%2FQ05APqwQR7J%2BsdACdFA183Tom5EnpY3i6F8nT%2FmAIWMJif68cGOqUBn8oX%2FkrKovapkRkgdFLLqgGeSz4zY7R15b8xxUCF7xH6MHYXwIsPYg2H8LpI%2FDwOnikKjqIh6%2Fk0oGxrHCI9aRt8FoE1Km4fd54jzvUr6bun1PiunLdQveA8wTTp%2Bl%2FRq3QpJvi2tU2hPXlt3HqaiMeK%2BeuD8NqFKnpSTIrq2eIBbobzxKc54MK%2FouhbNwQ0ZHTgp3RZY1mLVnBhIctg0%2F5DhaI4&X-Amz-Signature=1cf7b155281b12eb625a02b9448a1f1611a18f82411d4902bfaff333d9139540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
