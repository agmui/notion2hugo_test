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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3JJLB7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq7hAJht54aFW70eEqtKU7Cc3uWqtnKRQDgLD0ohMJ3gIgWsgE1L44SJ6YhBRTHVGvOhOe95yigfas48iTyyeZpKQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAmycElcG5RYh84k5ircA5VHLPvk6qcF7Ok9r39Fgn7zdmSp5j%2BOCs91BVxPBvB9B%2BmgkcQ8ubzTSfYbgVq6%2B12LBvlNo9XLyZWgkb6qoEwPFTVCjor71SCi%2BQERtT9%2FVSUGbmCHzXujntG5H9DX89toHZQeaAKg74spgmuiVPLCE4OFttz0T%2BiC7r4JGHfuLVHkAvBJgFCGUK1yUFT3flaU1ideIdvMHVOU0W2Xa9OF%2B8WlFsKmVUKBEY7k0xW9O0TzWIqL08FQGhrd%2Fo2tvC%2FfWh%2FTymDCZ52637EigawqwOnFeFGJZXToiHXrHDrMDuHL4siSfiIOYL%2BkG10REZ%2FGUh5Ffo8xMhEGvtgGOGdTJxT09RhN8oKQZBR1OGpCcXwZ6PLLgK7iSjy5m7uheZ%2BaTJjMCq7J8R85gnx2ArF7Von2Ef1bG4kU%2BdpT65Gd2irZ8aFz%2Fl2Wb4lSudxHyTEk9jiVhUY1GrAKiV3GxK3T%2F83lMI2ir7aU53pN%2F7WEKt0LyUR5EYuv5%2FEKDUQka8zLW%2FC%2FRiwqHgtNXkyvLQfHg%2BNuZPN66lozRZJJ8fZu5hQVc36mfsd6PMw1J9KhmEE8lD8luXpe63iZ0KXB9m4TdjjYQO5L%2BkxEevFlvQ3dfJwYteyE70oOmINMMM6iu8QGOqUBNYX%2F1AYI8RjQ2UFr2%2FUra3BH7OIHVspdj7xv0riBxkkzDN1U8MW%2F1KW1CpJaC5%2BJVyzx59MjGgyU4QU%2BQ4WAxFM0DYXYRffoSgOWS%2BpAFAu110863JpC9bCDKwOH92zBbZDqlFTHcpdXkeWMquS9Op3X25nGXwtux5xJrHQ2XDDMB8Ifi7YvS%2Bqwh0qHOCE9JHBnr%2FA6NKHV1kBkaVKNv8L8QL6T&X-Amz-Signature=ac137681e56793ccbd1eee29b4270b3f380ebec88647a26b117dd0bfee9bd549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
