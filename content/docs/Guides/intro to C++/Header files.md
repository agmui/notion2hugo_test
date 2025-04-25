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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3HVUX2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArp8VLSSHh2c03wbYSkfylKRtXQINLfCrxYq0HdIwWLAiBr%2B1s2yzRMjattzKwCavxT%2BomJlk%2FaG6G5EHXj7xh1Dir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMRv43roKAl%2BxNKSxoKtwDhEaBJysN5HUQJDAkcp3fDoo5cA%2FA8Gds5vaC8biQITRphUgXVxgXWZqPQy5FxWCGkQ4f6xSV%2FOe1oUJSjtSCFxkNruCGTlbIt4URkziduEZZBUr20sNIJpwSX%2BBs6rRIJHFb60JP6cfG7CAOYl1SqgjNWs4jbPIuHC%2BbHn%2Ba0eBZmFHjyNRow1Ds941UDa1iVysaCQGC3YBd3MqkGOnpFhHAbSsp1fQllRJ4rUS5NemVAekF62y%2FFsggXomdJATgzZbZe077nXJ%2Bgm6jly2oPHiPtvNI4Nr%2Bwc4nPMS6rnGOadHTrNFRRfnAL9ZeecZOaYJW9fw4SIWZ%2FOmp8n2UNrBjUhT3twxsb4X2RovSxz1GovamSt%2Bozlzfk%2F9%2FB7C3t1UJbAfgI4TIeApaSR9E9UQnuYRATkzXIMJNeKNG8J2yIqc1CPzup4rUOawb%2BG%2BiUEvkx%2BbAWY1%2FatwZnaGOvFA4D3UteskYPaXZ6ZXKKuHxVmjKPrZx%2F0Hlf8fyDluDNb%2BOmwQTIydi6g1vC787i1mgKaTy%2FAWWiohkE05jFnbg7bYZmmKvt9HqTc%2B94mmVoxnSwmgFqguX20vKH2O4kaFFvmGKarOmv1ysAPAtYK4XCEkxRa%2B7yA69Xegw5piuwAY6pgFj0gbYI%2F%2Fi3lKE%2F6KljuFA5v8Cq5hGuBdYz1n0MwdPEr6UQg%2F1uXGXhlpoZJC%2B8O3rukcb7coJMRLa5ouWv9lUxhvyTNMInhY%2FBUe9QUU8OvAapdC3zE4TdSNu55e1WnWp3tE5TXTVCcV3JEQVGf%2BOJBfRU1j%2FAcLPnMyekMaV5rUe2ANAXJ9MDhAAmVkZNes2UtRLYRRev8LJJo%2BrOaqkoLEOHhE8&X-Amz-Signature=60b68a3199eaed3c6f429a6c165f77a74b4a5833e2d52b2f46c186ba26d859b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
