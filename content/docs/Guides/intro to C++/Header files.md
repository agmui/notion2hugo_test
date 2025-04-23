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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRSWEKE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHXnYfWYNkuN84Ad2KqVnWurJP20uZCMwhMloVmUzHxIAiAZW%2B36x%2BMFLiJvj7CIi2nqBAxZexDUu8VXVvndlcN3gSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2FFGjLaKl3aSp%2BFjKtwDkJ5yNdDGh6qXBUCD3HaUkWM0R4%2F1bIfcLH5FaKJS8go42SnwaYf4HfuYOaud0Fmv5ucCt2CZESavofXJGvEIX%2Fgs32lDlYeE6GWM1ilH%2Bi%2BBgZobocttIYKBDB1SVzLc%2Bm6UPfBo4KEw2fO%2BY7RZAOxvhicWEPLH%2FZzl5PElgV0XKQOE8dpa18plEBDhS%2FvED85%2FlkJ7r4DsF3IqEYR2pEJ1AN0BU1WdAJ4HSWQwtYT9%2FjNTK3JKGNdyX%2FM5epYMA6%2BPkVdaHj72obnIZLbwIDEr%2FQh2TDbOFddqTP1ubh6t4D2KVOvxDPIhP%2FH9cjusY5HEEBbw%2BD42%2FYz%2BcjtqsSJ01DdiCVcmmXZ9IA742xxP%2BXfxnipPKpTORFBEAvIl%2FzwS%2FPYQhPUC8slyO%2FLDFJY8%2BWe%2FbP8gXno2ZK7dBaszDJ9m%2BxaJ8ATzNNeKGOjU39I1AaOHaTmn3N4CMrMnz3C9GlkouhVpEvaKt01fZSPnY0pIHDOAFkRhkgg4whZY%2F%2FpXS2bYM5%2BdPjPgOub0PqsYBX3CE2jKUSQjlJmIYA18Bf9nGF0zbe%2BWTOc5X638YAHd%2FVtowk4WYb0fZ%2FVL5z2kDfqymt1h%2BrHX%2FYpOznlYaVDCJNNiHXpmaYcwgNekwAY6pgGnLrHtaMUFSw3XaUras4mlROZV1X%2Bd7DbkXzRjS5i%2FoKMg3yNCpHJCgGbXdOxVC%2Boda8rurwlrW6H0gg%2BHJTT96A5GrpaiQnoHfykiwbU0Q8lmt%2FkTqsBOOcon1HF9WnAd0d80mpIBAw3aHrQE2Lyykt9HkJi7DyYD%2FYkRKvhsWI7LAVxeeye7dH7dKG4aQwbxTGhl5W9bxGXUmTrnvwj8HxBHo9UC&X-Amz-Signature=66576c0c060dcfaa76de4c4479bf16581b0cbaea7cbd7880827729de0c10628d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
