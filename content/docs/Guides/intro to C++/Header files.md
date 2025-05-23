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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQLQVVCI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIG%2FLvZiwEYT%2Bx%2BWEDaVQYf5BiHOJgqPeSlSVbayH24iCAiEAwByuFQ143jso5odFOKnuks1H%2BD5ewwDhMUxxYJ5lYCQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEu7kEjYMmXyUTABMyrcA%2FEnRbWG4Z2B9QxNnI5cj4UvR6T1jOEfyJt9xXs32fEs4mgsqSjaiiIgLysm%2B40Obl5qquaA1TQkD3nzV8aH1o0At1ZS5Mu3IOdh%2B0oUjt045swtdxSKiCOQDjWqw%2Bzgy6iL0SaHQGg7bSk5pNf0XWWgPvlSgaC0BcY6AGg%2FD7dBz5fcuDvw8%2Fdq6s4rqdfTkCrQm9nvO2E3wIqYBlCSvDRPECdSEOck9lQyH%2FGcbJaWcmfsy4YOXapuvsT%2By53Eo%2B6%2B2%2FqpnfZwKRk4NXC6XeRCnhJXAKZGZlJxpaDXR%2F8kZrbMB31o4DWn7WUWhruoatbWjvYl1AjDr8si3HiH0Wx4%2FvNsBKruioK6ZJ9gBBVB6RUeSp1LZwjOQkIpOhRVxN688WFKoSJMmecnZxUTFvIl7bRT48XOE6j%2BLL4Jfd%2F5tGvpt1fA26Pkbbtz5oCI81wfQEr2ltiOEo58VbgdV3rG%2Bq6rn63P9ZY1%2F8nfvIIdznTBFUMMqsfcVyT%2FlSOp0edZ5XQI327wTHu%2FFbYG8hi6%2FBcbtpD9EyjTQTkjGURUiA12Pbv44aJ6GFEAzFZVCHAhtZp3xzdO8s0dPbXai8HWZAqtpe1PaXjNf9Qx9JCXfL%2BrZHU8HDYEfrChMNrCv8EGOqUBmTz94vmbQY5iB9YYz8ZWO%2FHhXCap0Gk1iKdKmVaVPeuPIgo6EDX1CS9fLv5xlwGAJWk2Tv1lFDpxifYm5Dc4nKVQxHiU42y8l197nZJSZJ7eP6gATPETjEy4pH2lHbre%2FDY9UPpYjW8LRedY6UeiwLys36883DNumVClR8rnNQCjNPVlwXDAMkDR7cHcd%2Feu7kVG9efNXpI0YKjh%2B3e5rbcApx4%2F&X-Amz-Signature=2df4421b7aa33cc103d185a00d39eaaf99ec52dc96448db81ccb496ea5ea7181&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
