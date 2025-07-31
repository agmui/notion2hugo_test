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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKRA7K5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwFZa3pMUBtt0nmBxw6PFN1Wv%2FC%2FCNAmP691VrqbDXiAiEAiRj2273mFT6JVOpn5MAE%2FDeHecP7wqX4hhhxXY5zrUUqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGCrkhNrz5bLsEPGCrcAx4J%2BwvQUpAFJpI2Tqbylg6QPqPQP2lbq3DP%2FKbqd%2FQQv%2Fa8PhtVziDu%2FzbkWNME5%2BT3N496pOja7E68ZCHPIfpl17KfVyOtD9BisPL9VajmKMSOHo3L%2FJa0KU0Nn26pFQGTkvZNepcdVlaRHbIGFmM8PA%2F6s%2FF0byb5CXZ9Xw1jyPz503ZCYs5qzfXv%2BtveVGBHeVwGSWwZIErYFgfl6I1Qecdh5q8T1jaQmG%2B43A%2BsRigApjL0gk0zWtDp31fuZU7TGBOCE6wI6xkORjrcwHihbn0UOGYE6g2D2ttaEahk%2B7IxMXE4nc584C02hRKE4C2FNcJipLA42yJ3M9v8MS6IXO%2FjCqF6PVMigFjGm%2B1Tqo6mwyg15518dpzTTiY5IXI3%2B7nTp5nDBNo4AthKEdkl9zfz%2BECUehqvllEXiPjb0L2niJ%2FRCoepv5YQGxOxMctkvXz7Kt8ydxlXlynWq2VdZUxAw%2Fr%2BwWW%2BrcguNkdOp9yu0QgbKauHy3qMSsR1Xw15z4E%2FyrB2PqnRcNHe5OJbo2agQULwC0uc3nTT2XEEnl76PtZ3mi%2FMCgsW6C4mDmXJXtYw2WmwHQOX0No6%2B0pmbTfQ4dFzRpZslt3pngisisbmj9doU2maOEHsMJmlqsQGOqUBpzocDRBbJJMQwMlbBJmd0VApFJghswz0YFD%2FR6RamUJ2siGj5qoHrE4mA%2FeJAR60vSSCuUhGQ5lSPrzYQ9ADe0LDDXqTu7wJF25b6VQnGqJwKmjdHZKL8KRwePuk1Fiv8%2BRQQTOsUW5wF2mXCm9KJf18k5DXg2lXZT3%2Bza0AAVDIk3I7DDvF2bUbFAzcqQ7LPpMq%2BqGU7isnMAiXw6QJa5sNkNLC&X-Amz-Signature=4c37fa61ffbd9caa34f5f49fe3b727005acc20c098a6b2b9cc23e0b10b1b2142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
