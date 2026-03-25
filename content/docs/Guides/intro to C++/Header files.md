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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXHRU3C%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVzhxx0OBMA8LMf7fIL0mJqAmI9xyU8GuExMrMGbAe2AiBgJm1dUzOCuhqG%2BvBXxaJO286raP4ZJc5GMTYTmEGWXiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxE%2BrUBbXprXpWAOoKtwDxbii19LCplQfgO%2BGCg72ztbHVscWV%2Fer%2Bbz0w%2FrEtDoV%2Bf6fd4MSxaOe3LKo1hgtib3ZhdXOGu%2FAv%2BAPXQ34Q7%2FmedgXN6IHsW8X1HKig8lkA%2FETx3Z2ZHR1NeTitxZzOk0l8XU0EZTQQObPAPrz4CSw2FsA0v68UmNM%2BFXqrjyUaySYVAS3PwFh4XGb4nMwJCKGH1r7QVk6r99PEc9N7aNoIukG7%2BvTEOq4kOIcl%2FEoa9zFiFhDXQPY6xcwMjUzQNme8IffDk5OCb7MqdmA%2FU2EibloGKXC5YEb37WELXN0NMmjwPdyAOQ6vp%2B7cvPDsR60r0UQZHFjCYb9nORgtYKhdo3K9eEHueWqsoXvPGO%2B9inaY5%2Fy7JNHyWFycao13VMVh6wYP0H9ee9BfWg4ILi9oqga9bGhdmX21fl%2Bp1D%2B05K7bRtztkY4QL9nvxI1TRebE7OEcNMQZHzzhXT71meo9xpCegHrqxYii6rC6havxFQ4DIFEc4bPoQTqA6qOvME5Y%2Fh6ixjosweXzZNnrGP%2F7ActplB4PlYa9Z7N8rsE9F2v3dG9XeYHd1cTkJWXn0VxDkkpr0DXWUgT%2FhRYdZwoZItqaxowXdZtfJvasL5GVRdTjkHxjq5qcnEwi%2FSMzgY6pgFZWMEBCAIdEFdTQrK6h8F6oHy2yf9%2Fdb3Xlgag7Ny5%2FWQsz9Odp4RX6WUYFPDTai4QRfWpm1BFVQOJpYgouHh9eKBPy5hPKkJYKCenw9hgVUUbG6qOTPuUjdmu8WgkJLM9I4CrVeCV1BdMO8B3tYPj%2F2uioiKsSiNTdsXLqoub%2FPPvXkmgqto8qnVe01PqZaBZtb2eKVf1y3rBAqT7b8gUay%2FuHwZm&X-Amz-Signature=91d90235f2a01efd4fc5a73a85b570c7923289e71d7ac29e959d00fae497cb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
