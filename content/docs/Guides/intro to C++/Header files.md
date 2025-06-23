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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFXCRI4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIEIHipwU6XIhU45SDoTmoUjrscEZJN4qmltbdGBpDTlVAiEA1KMWQY8KPmZYsJsX3i2%2FdlQKL5dW1InZgNK4d3s76LEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDA0ieExzGZ0YfhmV9ircA5685XVIYvXD7jqnr5yVG7iKUdEhYzo8caOi2hqp8Jeyim27gdDKTnsmKCwFG0jepLLLwNuo2FJ53LKofk1YDLsnRaLVpRHLBG9HckOHeQMCoWkTg758c8cyvOBKEUeRJfSDgU9R%2B98PkSHB8ziiXvLdxFMjl3KYHaH9TMGH9%2FyDZL9%2F6756mj1R6m61XuQkF9AQXkeVQ3KRs%2F%2FTYjJprwNTfLr7HQmM80osBEeQ2by7NGGXl5J7Gt0n1JzzEyqLJuzFFByeasgnlpO1bHiE6zwuXJtjOYJpoRsVOX14tawf%2BwOWUSArw0knPXd502KbgDkXCAIGMogSG9HOrE%2Bo0nBt34pc8qXMkgh5j7djoMU51Q5c9%2BScDoh%2BaJC%2BRa1l24X7kFwvD52ISP25B2%2FmixGzyu1tBi9NSNmBLibj%2F6I%2FQoehZTyNuKl7yNOqfu4w9OPGrwpOxwsYPR3Om3m8xU44Oc6YjnvkIwcWdVjU1mI9RTuuiLj4T7lqzTU0bPQZXMU%2BP2LkJCpJm87gnYkVIxhXFVq8WvdA6WvtI%2FGFr0%2FjirvillWCeymlp2Opus%2Bn6JloZH5AxC3yicTWARZOJbd0aWK3H98o6JmJUgdcrjpRi%2BBcVE3cynEl4718MJPz5MIGOqUB9X01BH%2BZF3tV1nVvfhOfnOI%2FpgbtuBQCBHHJiZ3txidoDDK9iRiOsi2j1Yw365WlhKIVdkPHGPxWVRz0AFFhF8WmUU3qJpOHL3C3Id18hwXtcac0NWZJG1eE031pkG7nQvNZK%2BPa9i9tXkZ2%2B4xAC%2FADnNZfh0vPL96FdrYASA4k29jAsXp1YfS1%2BFFkhaEoa57tgAJUd%2F7%2FSmz8CfZV3UULK7Dj&X-Amz-Signature=d540575baf3c6b29491dcbbcaf4bb39478bd8db2e69f48ef88068f5b6abe6171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
