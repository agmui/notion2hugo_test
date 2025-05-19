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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQPBJ6Y7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmLIEDwR%2BM3t8x3PJZI7%2FCAz%2BcGv0Dvey%2BtIhfTVfdHQIgTDb2Gg8RKlfTQPgIvuS5QyoOTscAdKjQF4fQ%2FbeI5WEqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7TNVeCsh9eox0I2CrcA%2BzsZr4irKB%2BNMgWa%2FxVTqqdPoWJTHFnTVeoooR%2Bxs0Ge0zkwa5p0eCPgX2oidMoFZwxBxFS4cYTvlFK9TCt5q6IGJ39Fl9VdaJUJ7MPqjaNCCxA2zM6Y2xFjFNStltpCPcevd7Yw8jI7x39HU9yVHgO17i5B21x3T62%2BqKuRmvzdFCQFQMAHy8X0FFmNBnradPoPKmGb5%2BM%2B4t%2FOWjcTTSiY6EyPXLTVz7uWkiEvtPW2ppPklGNkmGJMYM7PVmktaiO2zCYdAAXa7b81zmA0kbEowuxyXQhKgEM6WMLKFydokPrgDJX4mZgEq5nY0%2BmZDZix9aU2bQwac2K010VsJ7JDKfXShTtslF%2Bi9FP9KBUyXdZ1XCxAKR6852ddFhfHsxpjpz8yS4dU9zQdsDBh6Ko8WezarlQBTLxgY%2BiylNYg%2B6sm0QGQOgiVdZudL0jM6kxgwYyoxtKpV%2FhwQw4CN7UQJxuthPdS10ZxOHZYh7NupmVvg8zKcMGTaBnAilq09RMlYW8P99Kn2nZUdoE7FXBxAh%2Fh%2FMKebX%2FNPpc%2BGEWxEVZ02SsDTOhqIMSkUFWhwC4baUk6sNln0o%2BK%2B0NOClZAv%2FwNyQCOqu4ZAVVE45TeJhCTf0yE9Z0mg%2BZMJjIrsEGOqUB4%2BQMhNmCXXH5RRWnYMr7tic%2B00M%2FAKSmwfzoWpX8gwWUsB53Y%2BX9Ax%2BS0ktm6a1Tq%2BDQIllszAz3WP82JGTz%2FxtAicTmiESB5QhiNkWkfIo0AiatOeigr1qGPbbmVi%2FUvhom0aHuknMRnoSw4lnyYYosC6UHd6goZp3cV4OeCSil%2BZGuVPQh4q4sY1eeBtSTQp5sBbuLVSpN5SrqjZc0j7kAWEKs&X-Amz-Signature=0bfcaed12ae1cc38ce55b46632b9442891c1877d246bdce200864f85b95aa1ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
