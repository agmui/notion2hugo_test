---
sys:
  pageId: "3b20a009-1d9e-445c-8d4d-ddae003b39d1"
  createdTime: "2024-04-16T19:46:00.000Z"
  lastEditedTime: "2024-04-17T06:48:00.000Z"
  propFilepath: "docs/Guides/pico_basics/more_C++.md"
title: "more_C++"
date: "2024-04-17T00:00:00Z"
description: ""
tags:
  - "Onboarding"
categories:
  - "test"
author: "Overridden author"
draft: false
section: "asdf"
weight: 119
toc: false
icon: ""
---

### IceCream

### include/define

like python or Java `import`

Ilk.h:

```c++
class Ilk{
    ...
}

```

main.cpp

```c++
#include "Ilk.h" // like Ctrl+C and Ctrl+V

#define PIN_NUM 10 // like find and replace
...
int main(){
    int newPinNum = PIN_NUM+2;
}

```

output:

```c++
class Ilk{
    ...
}

...

int main(){
    int newPinNum = 10+2;
}

```

### Header guards

```c++
#ifndef PICO_DRIVERS_H_
#define PICO_DRIVERS_H_
...
#endif //  PICO_DRIVERS_H_

```

### Pointers

### Pass by ref

### Arrays(and getting array length)

### Namespaces

```c++
std::string myStr = "normal";

```

```c++
using namespace std;

string myStr = "with using keyword";

```

```c++
namespace std{
    string myStr = "with brackets";
    // ...
}

```

namespaces with class example:

```c++
namespace showUp{
    class Jason{
        ...
    }
}
...
int main(){
    showUp::Jason();
}

```

### Classes

```c++
#include <iostream>
#include <string>

using namespace std;

class Ilk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Ilk(int milk) {
        this->milk = milk;
    }
    ~Ilk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\\n", galOfPilk);
        printf("%d\\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Ilk
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk *p = new Pilk("coco cola", 420, 2);
    p->drink(1337);
}

```

### Header files

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31f8ffc6-9fc6-4cfc-9e1b-c4b26b1281b1/ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240417T160132Z&X-Amz-Expires=3600&X-Amz-Signature=4c5f0fef878c0241321c44382cf5b1edbe292a040eb4a0bbc9e9281486d785d3&X-Amz-SignedHeaders=host&x-id=GetObject)

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240417T160132Z&X-Amz-Expires=3600&X-Amz-Signature=34c3d08853098c98bccc69f2f325044938d2c0b1e5db8e733adc70848b60ba61&X-Amz-SignedHeaders=host&x-id=GetObject)

Unlike python or Java C/C++ splits its files

an .h file (header file) is as if you folded all the functions in Eclipse

ILoveBen.h

```c++
int ILoveBen();

```

ILoveBen.cpp

```c++
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```c++
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

Classes in header files example:

Ilk.h:

```c++
#include <iostream>
#include <string>

using namespace std;

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

```c++
#include <iostream>
#include <string>
#include "Ilk.h"

using namespace std;

int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\\n", galOfPilk);
    printf("%d\\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```c++
#include <iostream>
#include <string>
#include "Ilk.h"

using namespace std;

int main() {
    Ilk *i = new Ilk(420);
    printf("%d\\n",i->getMilk());
}


```

### Templates
