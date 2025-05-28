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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTZWART%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkHqVqKgsVv4VQk%2BeleOpHFzmFQBd5vlT5r8vmMIahTAiEArAKyHRefv7ShSPUyXdjoZSyKBWoNikc4zfsYnTriX0Eq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDG%2FhGW%2Fq0GEHrPpmmCrcA3eZomFlzRlaBsZjytQs4PpWvgD6jkQus6BdMTC8sSrs98ahMLzTxPy7nZG6awCiZRQ3O9lwX9%2FZLMmRL%2B%2BVK1zCW5PeuZRtq1Djz1sL3TyQNdx0ECPqBR96BaLUYfrm8tMDtNp6vBFfrPbsuP3Km7fv3Pqv6u8uDpmCkh5ie3c71GUYIIKpAHYTDVypOBQIZy6wRbS2ntwP%2FA3qjhiaXxGY7jm0UmJ9FRCB%2BtfFGxYnUf6INR%2F5yHiFFJQce8NpQ8N%2F3YCt2ocrsgWc0e2KBCyobGoOItc5n8b5CsgG8%2BXd8YzvbqXZhMFcJxXxD8B9DkQY67LI6EFgBl9J9q5CLxHa3J0bukSltPe9M%2FyMpqDxfQrEVUDg2zIibxok4NQXj45M4mM56poI%2FY8elud0fNyLkjqxQQ8cntkgAc8f3IKurEd%2BH%2FXpImZtV1onAL3LnP%2Bo2%2Bfo77QH7sJpJGiwfG75lm87nGJ4uNxIGYSMNb%2BN7nqqwGsfL1ingqvVM0N2uPhX6ojDhfktENewIADTdB3UCsHn3PlDQzQnTS6A9Reu2L32i3mJk0ftu2T%2F4MqYqkfAGtvFp9UhLP5yl3N27RzgXxvC5U4TcaXlzBkws5y%2BhabYMz37SVw5i7bWMMDD2sEGOqUBD8lGdCGsyeryq3TUoDcz09GXmugEuBbSJw%2BEEDJgXUTwctgvnf1Nnb1h2H02OfhCzD65j50gbykTUYJ37JTi8BTShvVrlGtq2I%2BFVay3bDAEdcnMt9vsNO3l9MF%2F5ttxmxWZvjk5JJ6CUI6xCrNeM3vz3%2FyVqiaCcu13nIwAbEPyn3HaA%2FrxKvRRi7qDzK4mCwwpF7iPSlnqeS6y3XZ3hmVb3B3c&X-Amz-Signature=e84b3379f0491efb4c95654f49a18d9885f288e4344feafa7be20b4124614711&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
