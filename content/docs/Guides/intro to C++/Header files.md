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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSGQQ74L%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICXoO%2B%2FjFV3LC%2B5OIfMCkqaZr1GpVzC9YaL3AcoI72gQAiEAjPhT6ZMqv18mNaevcVIQC0c2aov19TEZRGKBIOGk2P0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6fq700X%2B26d7uvLSrcA0RXmMKvRuxB7xuKERx992HpIIh2nETHgwEztvpqfFp2Mxrhyq7NrEvdq3ZOrJG%2Bckx0GVpx17hhsT5nVQmHcsOtx1ydpiLCER8K6JohX57v5az%2FQmVnxxa6KOQJumXv4yRhARteEFzF7FABULURIH3uGcuYymboO8TIoFw2ZzKAOYn4OkHs%2FZAXwpFgXSkV8cuPbM345IKlTcvJoqQBYzcj2o4wbCzDLMYa47GsvObyAN7dobS6X6XJ4AA4lQPwPcIo4O04%2FoxdnLW1uLtGTFC30uaB%2BNTLrUElZ1pgJHKBSUOUhi5TBq9piqkvvsts%2FuoKC21RA1sCCbUxdmellEUSKMdv8UW%2BOwfkWum5d7H1F%2BmICO9HKyCeJxWpX8nNy5H55wbRiNWsC4CMrcQLzWwKu6tRB3%2BAja92WqxWGUpToKyQIOB%2FwoTeiQ0apbVMaupfbbU6CmD4iI%2BXvmBXg6YhXac7otFp63sCDfhY0GP40THOHySczZ5Uo84WO3D9%2FTpjCZ4aFqpjYV8MKE1DmMj%2FwIokj5YQ0VPf7gXxvEjXhWBUhcRnTQNLulCasnGCcpqOmwkZMoP7UyFhJn5UnO81RHEfZd5jqLwA02rhqXOUYTzRw0yDKkhF0FWdMLnNhMUGOqUB7%2FHd4kkGQaRy5oGzxgB%2BurpHcsxMNEqg2JDPZgGDKuiz2j3vD9fMgzu%2BCHxImU06wfQ45QH2oJRN97bckIjIJYTBp0fH7cfntK7NR%2BvVWkJ38BxN1QG7%2FSyU%2FbdG2NIoLzqECpEVpLyTQPP5Gh2OumONLSDflzgKagj%2FMu2n1jP%2Fp8xrQoG%2FeYsm4t6feS1oBrMxxQzaCt1eKDS2Czew%2B2AGOS3C&X-Amz-Signature=3ed3a5fb5610cc39008c89c3490a294be909fc5c1e32b05ff9d81860b211243d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
