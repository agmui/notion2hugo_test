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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQLXAGS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXvRaekAOfEmzJ1cO7MU8Jcs9thKhqasDVcMnQU%2FO9QAiEA9CtPszGFmpS37ArzPjfmO9gSAjhykniE1SZYJtXNYO0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEECk3%2FZq6NRVy6NSrcA2z%2BSertSxoF%2BaaTQXMwdqmFtm3chKVszFtq8pRFvw9uOyfHFsfgMjfpkC5WYL800vGJQR7AhOGnQ42Wd0hoLhI%2BWTyEtOPFgx1T%2BBCGvYrbrT%2BY%2BK932mtG2flMHxESGmZItSh5OpU3%2F2jHdsITKOz7p7Vjnr%2FZYFeFBaqZwit6KmxlKVfFqR5zyXqjwwflc%2B%2FcnJ8uWMNCZ%2BLShLZU5tpYVH4%2FJUazrtJLqDmwHRRs%2BUJCMHz1QzpJl84xItfA018qwv24fNOqQm8n2MnLhnlVZEqdHxFXc3pNCI8MnLluh4YHZFjVFtgOq2k29c5QydHg578qTPVJ%2BF422QKgw%2BBMbc4YYg641lAlAG8%2BOKc0MUDJjqQeN8A6W4%2FIDFsQz7hMdj8BwXU4QMSCTdHhHoBgau4L2te02cw3LnhkhdWtMkD%2Bh1%2Fm%2BcM0PiCeVEK8ZvoOWNXFxKFDchswXLcV5IyFAQmjmE61YhxEmIQImswMYqLoSWFXE%2FENkPcXqozWMZiOHAMnRwgnAhztPrmtxmLSwpU3ZJbIYXrTcvb%2F%2BLgjwYcxWAY0DM78DTMZuvSLF3jl5ECOulivuC9JYwdVO%2Be%2Fuf%2FbdJQx7c2uyYTbia3%2FF79bodySWdeakOXTMI206sEGOqUBSppmhLwlf%2Fuuv8PylIXzdxZXHlrdesVnHp9h1oE1QGvf51EA4xIqMtPkdO1lKCcgSRW2RpoO%2BGnFOLW9xioo8v05%2FhNagg6ISVOvKTq8KcXvAbGDoFTk5P80m9DFglpJ%2FCcJDZuWKrygMcRjdkXD104XWMrldMjWQlWMXFju1eEz2wis%2B2JJohy7eJHezim%2FAT%2BHes9WSt3Dznub7OKoXgd%2Bw7%2Bd&X-Amz-Signature=60e62711ea2819713e5c40398eea5c0e9a4e77b0522104679aef1111a0ecc3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
