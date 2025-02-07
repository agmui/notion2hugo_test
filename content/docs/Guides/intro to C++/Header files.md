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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PAPXVOI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCeWTugPD48ul4Yeo0S2xBu3gV0iTQ33UqOF0MBhUgoNwIgKNNqwc9vZlJZfdxAv4fhpXUaVSvAGFozNEFeh5fOEu0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDD5WOnuTFdVfC5TIrSrcA8%2F1rMRJNVVsw8SJhfJRMaMDVauJHMvmitFHFN8D2IkiXZY9qFWDQkMUG7dFeJAb9KT7VKCC06cD7T0cTkUgZWIWKnc9VMX3LgboROx%2BklNt2ZUOOkxbgVE4Mw6n7u3xrzK8TD%2BPAJcyPHVAtTdM5m0K49IlQbbhGgr617aky8nJjjTVssy15EeeyzLtXLRpzvaB9QoMHWNppgvN9VvKztQalesy%2Bf%2BY4i58xIpyGlSWXDeS50cYJZ4CjGGhgAHNJ%2F75snjAobMrh5Pf8QJkgVliMxw1S6CmaQC7F5vWAqhfheE%2FDkeZ%2FSsKWEIsF4H5AurcPwCsnPDsTKjj3TZn00Y6MA3clQtXzs0me1GLMFXDlMAn%2Bt0NJd5SPc1cY6CNkf%2FWYxmCH1r2qk9Av%2BkiNG5jKAStufGl7WfIDSa1ZatWOJLYOfBB7yNKlWyl7rXb0Tq4JkWw92SEvGGFI6RVKloC5oEAYNpMcmV7AvOG1ly%2BjH1rwlQjCVBj5c%2BRJZGjBhbySM%2F2OscmPjy3vc2uTy6FbqYY2Nv4fMy1gOlOAXn3ivhO2G7PONVpEk8QTn5u%2F6d1ceX%2BuP1CRRC6fVq8eZOLAJYIE3XTsZvJdcBWutUL6m988bmDoSKZfN28MLiilr0GOqUBOkfWYXlFwXVYfEjpviy8n5iu6o3I65smFnrHxOmGseY75oae2c3AETTK3WihZpGlKf%2Bb4biQzXS59TJ4Q6QVRin2YxCfpnEbfO75RyRPHvtg3uvhTK1L%2FbX4PxNqqAIWAdlNwMkNRQi2ZtXcjkfJkvyLJuyoBWkY1lEwxpxZqp%2BsZ0zjhGdUfK1wp292HOc3vadT22JPqXzIh%2FxV1o1%2FIWrq%2FKO%2B&X-Amz-Signature=ca815eb68a08be1b0774c50c9a2be02249de8e4a97c0e881c79922fcb6eefd38&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
