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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFBKJVHY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOwBDOLH4y6gAG%2BB0ZcIWuzJB8d5eFdHsR0blJh5Am4AiEA8Gfj0FAahH81C5ZoUNL0A62%2B%2FoY2CD6%2BCav7HlMgME8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGrMKc1Rz45q5tS6rSrcA3ymORrrGF0a9rCxKWJgcxf4Z5MDHWT7JrTnQzhFTpbo%2BEHubiTi%2BWC%2B1xiZtgBPoMjToUUR3b2iKVeTn4ql%2FXL%2Fe%2B8Cz1GaeWwEQZ81RC7kH2Bo5goKbLsoKXagoMiMWcFYR3kkN8tIb8Ig1JkHk1ZamwYFvgJ2eR0NSzbiAP5ElZ3VAsNxbI63pKXH4ym5FWZ%2FYbRwT%2BtxYoLc3eA8RCRYk3U8yOqeL6SDNpqvocYd6ebtYsL1xrVrUf9se%2FsP7udK4zUCSTcGujL8yCIy2BTfZQoEttox3IBdV22T4OmtJIep6AMvfrXy2FHvbtvEPfPSS4yzXNaFTEWmaHfemOUXSKmU8k7DgJq9rdLvrxLfI%2B5Vk3CkLk7nI%2F221vAaGx%2FfzGcWF4QHYblTeAKT1ggNMMRFeflUboonGr7XnYPzjf47TbyLO0taaBVPxmZMeFQTTYF3QI2pns%2Bj0FKeyU82nl%2FEzMS%2B275sJBiZY8Vjjjv%2BoW8hA%2FzJoQNLF3ZiEcxKYZW1FfiXPj8%2Br5BnuFyYgzLUhAsmZfJRxistbAKq7zGhTqy3ipOnC9%2BTrGiwF5BgrEbKYIfSZ3vZLvvu0ZGCt9KlQDAhOYeB4SImkrNoXsFvRHXs2xGsXacTMNrf8cAGOqUBUBrSkckjCL90tpvELcVa%2BgAZkU9lVYyE2yWN6wAmlDVjYBwFXrZ7%2BqHLI86jmOtZ9IDbJ9XrzE%2Fi0Z6KgrwN9S13e3P1RwV2twwqI2k7NrrjR4PRFTKewQX7KL72fXfricgm%2Bw8BjL160wZ8hkptcZRCDNWSNaRlO6C6f9BKa%2Fxi2ATC%2BnJePJNl1YjYEkUMLnCaWbadBkL9hxpdW%2FTfawtduR4K&X-Amz-Signature=17ff7e207e7de7b67dd21b4e92ab2f5d184b5bfdfee225da15138d128db952a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
