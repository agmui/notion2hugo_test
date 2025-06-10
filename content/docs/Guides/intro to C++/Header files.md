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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GDGMZI%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3%2BSXvMOQi6PXU3z170IEB2xmyUmyt%2B%2FEIEc23HZJdpAiEA6PkvANa0WaGjypOd0bpdmp880%2BTmUGMqKjbx9MDDn%2BoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFd6zgBZxoYxtZAuyrcAyteD3iXGEi8BYTnKcNaG8%2BDjmcBcldpvccfFtKQYSFHxL%2BhhNJOfAm0bWXGPs0zZlqMN52Mf7cMUbFiGVxCqggbmP8IR4RNnNd7pqMkFlblCJwG4UqXv5avUWisaRV%2F4449h2sGwtZ6ZXj9WF61IfNWzXMm9kEDBFYj7DG4ndYVpljDdYOgXF1ClFU5rG9U2TXg4GurGpdH1ddVlT5OUO8GU2MjJBh35B6%2F2qKyx%2FM%2Bsm5phZMlvD8JJlR43S7FsDgtCKcpVB35BMat0Uuxs%2BNpfgPtw9TxKgTe0kzZKmHOEYkjUk6HFaAHPSMPyiy58yQUTPxMh1RMn%2Ftd1UFKU%2FSvXTVWg10Ryh05fxOGbXeGV04HsXA%2BssIo3%2FmGYjbLVBTfJXx0ulGQohCiXVTe6SBY7wANTGVM3q5yupwt%2FMIjDj8Wmr8KizGoKoJUkqBpsMpR55f5TCNHBnMhEdXlyEpP30xTuigeOx4OyFSBIMWYi1sIawibqE05gGSE45Gi6t%2Ba1sWJOXT0PpHXbt21llDdERnIbmbSsGZK83LJF9H%2FYGCqzB1Fu0v8CAB4UC4TC7JViX%2BkmE8zuM6z5%2FnWcm29mgTAl6MbCo2PL8e467Vm2dy%2Fgyto9ICMxx36MInWnsIGOqUBB%2BXHgsmh2xmb7%2FO%2FPRyXcUZyOGRNT3n2cv1CCld5nke5EpvXjzVozWwt2UKMfRGNkr0MUnajDD02SqSUcuwOq6kPJlrjiLpzNmCQGO73ZRf1Ee26WgoWbnTwpwcahFWcRFa2yK9BuKuM6WatnCCpO3wbPAST5Ipdzb9yr7zzibJVnph1sjVv1eatqamSy2Kxe6othj258z%2B6nrzn8hq2FSLEFqPi&X-Amz-Signature=8030512c5461558ee6ecb3025deac3ba70e8970ba462a1041124255bea321485&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
