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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YTH2U5%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICh%2BoTgQCZts3r7D79E8L6ZyWbN8JLrfxgVXslilWcaNAiEA4Sf19oHJ1ym0BTGR6mB4M41hZI32%2BsgyzagVXDTkuIQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDL%2Bzul4N2%2F7SCyODwyrcA0jPZ1C8GaO1ZJ%2Beja6%2Baq89Mo0RPTDBlYAzAG0Om3%2Bkswelg782e7y3hD%2BXhF2o07%2BITrz%2FFBU3zWUFk6DnfQIbLjxFjXu5pfQytjk90OFhYFM5k2%2BYVBvWrHFVzWJNbwR4leXOUTYvumdAbzA5V%2B4qvJ1rgc0TRYWZMf8J1BmUp3%2Fqk1ZiK%2BpbJw4Klil1urWPUOv2kLkTtl6YDeWwidDh1bHP%2FKPeWqF16cpRjUldzF9uNhBCJVzf3GUReHMIdQvFTu82JfcXVSTx4dDsQAfNk2MCSRjTHoORsE4Ocqv3CFGrBa8t%2B514C5QktXSWXDUIDxFXI%2FpQ47ro9LwBxdn18pP55ECKkmPHJRqEIytgfN0E9Ad71Q1CktbkKnLLZt%2FRVGOPNxrHrHcCF8iiouYuNtPuvqlHDin4geE27XkraAwuwM4kDT4fHBJ9Z0378jJC9Dg1w4xlHd8aMQHMZhpcXclvuyn3GaRir6KnwuqREdBRGbqzNYZtKz4aEh%2F%2B65AD7SOR2W1SUoDNld3cGHNtKScyduIKL%2F8CebHZqmQJ10Y8HgHs%2B3pZDXBtxSn8hVPnrH3tXVEE3iGW%2FPxo4LFYp%2BnHvWvAURVPUpIjr193sDPeRRIc%2Ff2Jg%2BlcMMPynsMGOqUB3kH1aOC3nUarGGys5hegst6%2BIu7u6lkZUVBCzi%2FT%2FU6V7Z0hMWDoB9Eogvk9Cdlluk4jKfiDkxETyJJRLaw9o8O0Dl74FRRsJsnPhe4OdqWhMgZNfOKgg9vOZ6dvjtDS1HavDdaP%2FLk1znlht%2FQaFAAMc3QzBPHHDPp85lqOkg4Sxz5kMb3%2Ff2rPpMqO4G3dVovcxD%2FoP9uSJR8SXWVwlsAImVrN&X-Amz-Signature=554ccfd8d43778e317f54feb391381acb43f82c7fd4ca0f59a2170defb30daae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
