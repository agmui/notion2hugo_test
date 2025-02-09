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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAUV3KU%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMU7pKMjSLJC5RqjGzgKTWlRDIxS0Jd6EgqqqgXAqsAIgPLuj13Cz343ovpfwe6mzvPiOOMqYzaNUJk%2FoQgfwmxoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIDx7K7EBNluSYmvSrcA723P4VAEK8eUVjQ%2Bjcdz%2F6ivQIXZsF9XgLuNHrC4iSOQthwJkFiqqXSUzOLX9F5qj5OHWqXSy7q79d4KpZasHYyz7yS%2FcNqz5E0PXWzz6q7zU%2BpW1ZY29J46uaQzq9sSWbtgctAfdelgWhmP1y5us3aIyUbewu99Ufj935HBHIKi1OCv%2Be%2BKqERAARvPz1bk0uCrBVHsktozpiV5BHqon37QiHvfaNB6p%2FsZJsQGPACsJxOkzNu7Y7%2F7IdctExcsGuZbj0LACrXZGe20Bs52Z72ECyrVtRTJ%2F%2Bk8RPXY24pRtlidUnJUU6ng%2BFFz27pmaYmpqcIZFkRnaOZgC5bSqFsQE98YznFsbhrKTPNKV7U2Hj%2BGoAebr%2BADisJRB3n8Kf5S8OxPLzIFcimunPdK5kPhsqryhQ1zE0iju7l3q%2BoJZ4C4GK3EE8DnHAhg%2FqkH7e3UzBAoMDI5i0tVStITSydP%2FX17lYYc5n95%2BP4Ah2SSFF2E5jaVm3ruqhc9eQwNw2FKfN4pcWylOQkcrPGRRpCmdKwML3dm6i%2FuclLHC%2BuLnTk9q682tHmsRDClleIL6vm%2BM9Uxq7W7O7izE2H8VeE58xdO7EIoELbQ2JtRrjFHTyNc2szfgBE9YFlMOn0n70GOqUBzjJ0JX5U0wNJv8a82TUQyrtOq%2BFBHRY0epa31NTZXms7CtsI%2F8C6yCLsV2n3qODSfsQA9VHugrSlFnQuTzVgxGvJBW21mZ8Iwvg2YRiLjyYTnO%2BBHLyNIBbhqEqdkVVF6Ngq5%2Boj35SCtlygC5uXKVLllv6gPDKNgos4xKlLM%2Ba9EZkydCyGf1MljJZjjk7co4I%2Br2ucZ0g7KjqhOVm5ugHYqWjE&X-Amz-Signature=bef07a47add6abc4f9e215ee16f0319273c62f37763b929707b85daf2d39c1dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
