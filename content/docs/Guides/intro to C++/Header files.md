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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEZYBC3M%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCKYlmZsv3TZZhqWaxuIY6rhFW5KcXAmZrGqtZcHrj4XwIhANi0ZLTl4%2Fx%2F9A74nXbqTSZjOSHjtaH2hiQ9bAbFzPtgKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BF8POu5aAmgWGC14q3AOu1iwDjnR92TfjEEnXgyeDNlG5Oimjvu%2F%2FbLlGrSMOmcEL4XaZVHMqKgQVdiDZvkpMgDJZMDjwHEj4JXKgJABLBnvL%2B7bomjkOZX%2Fj5GTV0I5qhr1pwhq4IS5nn4oxmTMfvD%2BfpdzZgTpwmx05mpPjv9x4B%2FKA1rBOUGWtvtZ3aWlA2t5CSUGhzaOP6yedG33bkS2WrSa%2BtRShvCSPfupKcWXHvHE01YksqxRAE5HSxCDhBgYDeJ8qWzi6QxXvk05fZpBCOUwoeiy3%2BL%2BmItpqd891eic98M5SAFYN0o30L6BWw%2BSBoFoQCNcAt6FG%2BC41GaUsorSfUs5pawFRyhWLLww45o0Sm3t75TxzvXdN4JQmGdSOwPHJxtbIbaOJJt113NCl%2FTykPNuXI863wbOj21DFgZDh1VZAF6SbMuYguaMc21eOA9YTS3OvfHI%2FyTUunoC44W%2BxtAs8c2QeqfdQV3Gix4NmAu5RwrkYU9A1BdcW1wjQb7hjThKQI%2BeuAN9v35c6eY9F1gR%2BWvlzujdXf2IkhrfQAs6zR1UHp%2BbgT8Snrjm%2BUQWN3Vvquv3tYFUoQuSD2qHic5Uc27RwVzf3N3EhuBAzcTxRK7wIhSlmW3EsuPDuJsTUQJGSQjD63c%2FHBjqkAeIxKR4nAADjm2Z9oG5fcSDuUuKntId7OSGsF3xg1JQVadgnSGFw2Qu2ODUx5Al9BjEomTjUlliRckPQ8%2F%2BZsjHUKkQuYYm7d822VOpx9FE7JhgbuIRp7CzH6ovwur5iq7OocHEbN8I665CNUzUkaU8BhGIARByNhPlfmuAYgp5Z7TdwRHRi6dZnCbJaCNKxXPQKTtYBhfIzGkkQ0HTopcRR9qg4&X-Amz-Signature=4b7d27f096a8af0330db78e56f679c77588f3305fa70fef3eb9fb545a45e2e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
