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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTF2F7DF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEyVmI5nrnrT%2B%2BMn85JhkXDDd4OmfXeMMXI%2B7YZVmmtbAiEAhwjzYeJgj35XM%2BskZ9AZVtGlg%2Fwcj2y7%2Bz1EbwKzYoEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPhh%2FNcEKefYWADaDSrcA7NFDxeb9udS%2BvApYDK5j8FAEitB%2BBrf%2FuZQg8cU5i0HP250pyg3DlLLTTck2wMwC2ivIvwELlGFbQqg6q6vxhL7MY2TZds%2Bye3obv0avQAKBGaMV7T4GnPHSpIR1CU0aZfP%2FE1ya6mt7aftKMv8Zr%2BLKTKT8Qf8oMScVora%2B9ifMPACSjcdLVMstQfM5W78YnYgNzbsOTb7owKNk9iD8svcBZ%2Bsxzkm4%2BeOV8DluYoT%2BX9R94FhOUFOgvE%2BkBYZ24yOxjdIKiJmvoxXLL6VnBPaznz%2F0pzdD7VFir%2BuzTIXYdj7HbLlVrNZ%2B3Lc8aFdu1s34o1n3QlRqEgYQ2xcA3pe%2BBMf0k6IeHXhKqsmY9fNyYDsLiFAfwkF7SnWiHT66tNEFWKcPa1JCKfKSsfw1Ur%2Fxn8ron620DIDlDy2Ix8o0qzxmIXPfy7F2NhWtA%2BYwXHyhOqBhUP3mSgow8GiBWDSoYDSU362ZScQVEmAhHCQeC7GUBaSkVejZDxQpBURV%2BGX%2FHqm%2By%2FIUdujEkwsZy5rUpjlGxhqX5YI3R5kcqIvYC%2FNGOeKqKesYs79ajRKFDBAkWqJz2NW9tOwX1OGYKT5igJ4nRJvdPYMWRVdy5uwg8wLVS5Qs8V8mklSMLL8%2BcQGOqUBsJgPVLLkiZiZsxh6ZvDklnwy7klVjUeVoAm0PgGhDOfVXJhZkEy%2BFHx0PhQs4%2Fo24NndeUYPD3EFZotxWZgAeobiRo0y8y7yK44%2Fu%2F5n3%2BqqeFVK1rnK1qJ%2FnnZxuSf5V86HwPOLRl%2FtbW6UmUC5%2BN3A0wArnf2STTs1434EDn7pjPFkzzzMBiyht9b4xIQAowIHwzY0p2dcjhvVucb89izTelWb&X-Amz-Signature=bb29c7443a31bbe57c992e3676d266955decb629c6d1ee48a8e27f717a96c4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
