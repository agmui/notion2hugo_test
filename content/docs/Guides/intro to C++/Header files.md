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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KFUXMNE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICvwQRqcthGm6Iy9guLdD8Y7FS83pOPI0wjvlWmyBC%2F%2BAiEAi1IBiSzLy0U6t7Gi8iSNqheEF1ObfR8wxEBVDlrzEE8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDHik1kJ3Jm60AVMbSyrcAwIHYXvFc6XluQBCjimxN6nCHM4%2FpJfWPRIshQuVypuqCfXir3EXtPDbD6%2Bex9JtJdbRvRX3%2B1IO7UFfjlkLfqIQiVXhUKWJZzBO3SxgFUl7%2BhqmsIQR1DTcf4J9SzlkEhziGv0VjOh%2Bbfi6BcHMj6Ig8aIJZ%2BlVGnb8t2syocZ5KTuLv3RsTCq3IvMMt3ygO72DBFe60nMx6Jc6JQ804PEonV2HC6lXNEpfFKAwyrWNiXBE%2F16StERA%2BT%2BdzmPpnc49poEGmXk7kUcaBPUqT15GkNDJ7p4JsJLSK4HPUXJ0T%2FFwuatQGXSi%2Fuyi4kFYfHlUAMfaIbQWPA5IgG4FGTmBR4OJdu5N3ruP%2FziK6iy6huYHh%2FDd1QSv%2FMRvuUwuExXCMaKZV2WsBepJg0gWcr6ffOZBfyBOkHdLY6lfXQSKGqv4tZYXZdNiubG4iJFfxYMlRWXpwXoHW5qhX2OTBR%2B4NR94BwC%2FKZwfJQHN9ADb9z%2BKC%2FYgt6xX4s0atVXBRov%2FjMx5yhBKRsACPLr2znet1%2FbNHtH2CocJGwXH9WhQCCxrzvrk762MUpiwF7QZ3UUNolSMsmba%2FG%2Bfa0jRbiBVrIloE1LUMlv%2FHvwKNMYGwVjufNOQOLo%2B3ibjMPL9qsMGOqUBF99EDtwBS1lGViB7wruo3%2BmZ%2Fdo2s7AgjA6hYdPk%2B85b351cmTsfcyIjMr7iESFBXIa7X7YUMkWR7PlstV%2F%2FR%2FHO5BKPjHPWLkQjlr9OERlGOju2j4cQtB6avBiIxASHdaSmeyIc5wRxgVtBkCumZub%2FhbvZyqj7G6cO7jECkIrf27ftI5A1mB0f6jdhY6tjsy7V1IfZdLP7%2F91aKeWf5X4T85MB&X-Amz-Signature=28bc6a31ebdee512d781404f8fae0e497a2467dac09e4a8ed8fe2bb2ce05878c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
