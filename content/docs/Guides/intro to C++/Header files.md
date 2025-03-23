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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MACX4AO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAglSpRLnjNqDRbtQpZNal6Z%2F3LuoBhLfUM8445ki9JJAiEAsGQeNWb2X6ceQhXKzIWdJGXz%2FTTM%2BtKQseRsdKeJDfoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbKRtMFzUzpRE6iKCrcA6B%2BqZWNi744C33TD%2Fc5sB8JXM5FAXPy2VrW1QMPZdwChfHcYNpCc5UEwv7dwt6z%2BX33PaLP3VhTsVa8UjmUtOY1eOPnHNo8UWojh29is58AXiivYjdCH3bUAN4hbe%2BSCGJ1ARdgw3XNxXcFasKmG1tql8%2F6XEyoh3wST8zRbimYoXu4YDmNTN5psLX1%2Fn0wFccqGD1cuVT17cKOtii1UoG8zfhzhz%2F2t0jr%2BytJLUHdP7X3aXZ26DdArLpQOJuktZJhbTyL7hW5bCzw2MG3SDh6pCFP%2BB%2FSecK3s06kJJAS8Cpvti8reQyaFfxkuJho7lRKgrVDr6qm3miMAjPEca8t7RB5SjTSdUxJ9bdO05yEcyeO5uP5qXFSMlrVM%2FePayc8xtBgM0BqDEiMDPWLrs9HcrsK1sm5NnUzMrJbNXLJoY%2FMmEYQ%2B685MYbHvXnPS58UD%2BhJzhjWb9mwmcV38qsqrP2TcXCjzwRlGBPfWKZ2CgnCURKB%2Fgy4jMyDlXyrAN96Rek43j7SINfibbxBDlOPz17x30CGQoLBIkudZwi3HvsUX4OXumF4Z%2F0%2BDdzvKJNfaVQLI0TLUi6QlGq3V%2BvqJh2R7ZSrunXKN6%2B8SIbPmzfleQEUDaSgTi1zMJjN%2F74GOqUB1XDQE8omrxCB0MRECF%2FTXOV1XyaD3GiDxSSB7G9HK27lw3qeMpTYblbLthiQPTJ1cH7YHYrwwPYiI9%2Bke9H%2ByHryhwk7pC68FXCEcE1DAsK0z%2FiKIe6xTz%2BOqoOIX5QY5Pf6bltEiPYJHF6mdlCA3DoEegdYPO%2F4OdXs2od6lwrlR5hD6d4MtaiN5%2B9DOg8er2K4cqfGEF9WrPMHJ0%2BNDY0ubEyS&X-Amz-Signature=4028bf2cb0dc5b1f447ef43af0c55e2d059f696dbff0c534a95d6a54ce917d54&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
