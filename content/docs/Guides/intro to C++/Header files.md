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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REF5V64V%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfuuVR6aklfBXHG1MIb3k97%2FiJf9zW8oTEe96S9LOGGAIhAOjGxMCnGmfY27L0CJHlMaAe%2BY7TlEoRCpJWBN0z2OnIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTueJbBkZtzDDfljMq3AOqK4s9JFK7kx5xZj1n9Iw3j30bqkcozO%2FPwWlCFHDCqgpG95wd4RkmzsKJ3RmlB9CFvi5afuzfcQvWqSCxQIyUy7lhQum9abpOEt5JuB2ooLE6KeIfF2mx6Ege2MHYl2btuF%2F13PgQobxY2viop3sukodlMIiXkvffGt4wdtMN4VEF%2Bog7hcyp38Z0SgIiuBa87rrf%2BmS0zLGVjLxwRsT0GbYJgczpQohfMYOTmJseWvKMOm9M83BrhtuTgv8Q%2BXD3buQg7XjMuu0EhgR1gQpCMRkRuT%2FjtruH%2FQXv6q4KsveyVoJHxknBAtKFknlQZvnUlinIIpcVr95jerT18zq1NZoehgOxV48zjK2oqTVSVTBdOrN9QKVrjuAeZm0BGuUgZL2Rv6L%2BFZPRdaFGIqMrnqGmbof1Zl7Mj69Tc1yC5r5SPSnzDQThjl00HQvOhmWVpfd1p%2Btjdx5oRYWbs%2B%2Fplqu5deT2%2BEhMqZZ6lL3tgf8ahRVAptS3M90FDbVpfYdqCpBOeDCVPVGI9ztjnGh%2F4mnvw0ZTkk3FPOJPUTgTvg3bTSYt8r%2BLY5oVI0ZWQlj6EKQIzvZzh4qTY1uICDRRCwN6mJqSykNVygPDjq7gp%2FkjVqexhWmeBIv8iTCt0fC8BjqkAQQAJXkyhqVnqU9atusSLEM41fh08FrZlxIiQGox%2FzKif1u2a5BqB5iOxEPTM27fygVJsWgE%2FTy7WnSd5Wd4c8Ory9DxK30SQdsvXFqMJf062vAtIkl2dfyYeIwyAoV9zm498tYogxb0Ih2gS396Inex%2FMN0CmN2QhMEVm4XDljVfd8gGVpFAuqiicoThZ1qSjWSgnk0El6R0LglebRAfAdmJHL9&X-Amz-Signature=3285b299dba149d0c9c4e728f2010b27d0a32b2adba8af9bd04366e598a6b2fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
