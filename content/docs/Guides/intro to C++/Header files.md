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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ALDADER%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIE0aaXcdcI8nFHAR3Ke0oN7GkXzMSUpSrJgVbQpnErC0AiAp5y2kcu4jvSXlOXVAtP58NBLiDlLHDwBUmyi05aqqVyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdIkKl7tHum6dGJj0KtwDofaYYnisn3NjvBBXDnsivrBIMfxBXG6OY4Ls3gGN8SpcoU%2BlEtd%2BvB%2FBbXY7NbxuJgv7wMASXX1SZHiLglyPZZ0m0%2FgkrDgLIdXw0MLhdbL3TLN60e1bw40mLuCTOKqlQovcdbgq4FTVzXZ8ROUMdEeCcXQ1JrMLv7J9K5FadasIsB2VRs8KXUgEXEkdYID5d%2Byh7tpUU38B9ObLDPOCq35388L7OPJCuibO9fh68ZQ0emubaitc0B2bFvjnHNv4%2F%2BGziGUAYg3Mcgo3OojJOJ%2F%2FQXPKkbQoiT3IhzN9GvMHXxCQ25HLg7g3iJTH3mgSoU2AdiHSHmOvS%2FGrZndlQ4jlfcki0QglElHxt8sCvOPSSkQfAsbGrbKLqn0G2PiU2JAmHfScGyn5%2B%2FTyJPZa5XW1bgUtIxsOmICK7FRL%2BsQHVGDdG0tjTXNZGgaZjyKOrQFWb%2Fc%2BkSk0Ai2BNE%2FftACxAZ%2BE2gcUMmdARbc7fH9GSVkeS1fdFzcHxo%2Fw0EC%2BSuqeJo9HLr5ulqc9yyiwix7BeQHQgJs8KVUj%2BpLrPgHwwpa9QtDJERRXIdQswj5PAUxJiixKiWh4As0KLn%2B%2BlVFCHbTkeEoJetQp8wmuzZd1F3bf77KF5lZyS8cwlajovwY6pgHpNXYkvmUvdTYkrx%2BzCUHKfHWFv61XOCM0czt2urBWgK8oWdxrJa3m3bgXD3kqGa7JzsMGkyiyrEeJHLe512PsxSlaCXzF50eUBt%2Fhcv3dmqEOgiKkjOOMDg158dBpX1eoZMb8zPQyaexCHIZoCpjMLDn3b6VgmC7c2YH%2B7bYsjXYgAIgqdjZA7yRZhUQKlhqycCtczYDTam0Cpv0vht6L0vDse955&X-Amz-Signature=83beb759db0b2f6b67a6ef951b079bac5bf476eeeb9ec336e8ad821d87f8f20b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
