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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377LGIZK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBhF3rjVIuZToHDo8QyyspiUnJU8TIIIQ1oIXJrvWLdAiBrBjT3%2Fw85y0BjOXPesyt2yqpsjnxDj%2B%2BkuPXFNZ76YSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSHPMUayawETne4T%2FKtwDsBWkza3Hsh%2Fhi0o%2FVbGlHxTtkBtBBQCFFi8j%2B0UBlTeWaAwkJ%2BkVEVDa5bTpT1fPC%2Fpzg1ITOPoO4SrLqNc9ENACfFkrMopKEyJx60LOqLbqkQ8sk68amFdHgiBAbMbao2Z%2FCaVxF5W48TkAUql5%2Bi7U%2BHgYR3NnzdGOl9I8CJk5tjuhoDZ039rEYHLlLBsPPCB3um4shfPgkUdpgWGvc7V4959FGq2DZY4myB4%2FoP5GzD1OX2rkGZgxmxb4fbd6SRfmmH5Yo6g9CswUPJ4hdGCJ4aSq3FZjCbhB9pGJtF%2FcD4ARWZkhl8Oglml9z1flC5lZJxX2k2VwyJg7WM9H3jErH2RwLXsw%2BqcvywZZW0x1JBdv%2F5cleofeBx%2BmtdTU0lj9nmYjE31MGFIybRSHaDmy3cC8xdhObYmxBp3oVyhwVr4cPy9vDgfg14V7K%2FNKmqGqeckzKLNC7bUaIOPXIke6RbrbiF34IqQxmfsl7gEg9IObgJc9PbGG4vK3wDKo5MwZ2iowsJAF9McYI96AxtyfMQhuxy1EIpZNDPDwOqbb9q%2BGJMbivtUsY5WOBBrWyG1bVEAThMOxucGa1bNpbu%2BQ9E%2FlESh2vxgHkZyKjgCkjtreWvg%2Bhy77ihAw77qEwwY6pgEXFz3AvevhNuCfZvf%2F20BPCL9ZcLsHir6r2nGnmuOEY8dtPUmybp0Ktj%2F9bAUUWkk0O0anfktVEYLa3UGJtFbtRONPb%2FhRel5z%2BHbf1uA%2FOSGSE2sjfVujTRpdaGEU73cST9KnJnwfAE8AE9LLYOy7xc54Fj6xtJV5Wfl4ppvLkRbtZLxpyhUnL8mgPfaznzlGQTDRrYSZW4i8QJqUmfjf6ALJycWA&X-Amz-Signature=d360b0e71df146c80dfa0ddfa7834c518a6bfb5408840e231e759a2c619c5348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
