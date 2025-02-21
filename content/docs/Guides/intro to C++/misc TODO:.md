---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJY6IIOD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALv2J3Js%2FmFTDdzbhb3ZAqeGELicwvhkRDswAD8i4oIAiAyMSYZ5DxxxXKQL9UWbN36OnMVXC0zOHPH0TNIEaG65yqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBxX8JQgLap1lo0ZwKtwDPPlz2GqCAk%2F%2FjWiek%2Fwo48ih3KTV79WEnrjzDZbP3f9VpH7eteQAKsGDIJpmrJ%2Blak8zu4q%2FDbJD7v6zvZ9FxN8BrF93WzRmlqKzy6IhuYlItL%2BocBLin9SJg8j5tQj9HjU%2FNtiGHAodcII4bZMmxgjBWZa%2BskV0ltTyFoMtNEzNmgI9uqUqRY3MpTuXsADRAer%2F8JXMzOyJOfkw%2Byj4Iu3rS3%2BQEjdzDT1FtSTvqtWVdumVSbcuTNECMHzccj%2FWy4VjzS4vqOY5FL984yaLGvT%2F6xO3wmCMV8GoxMKcGBUAJDJIQAugztEdEe9JkDto8ozotRpWHmL%2FHzgrtgkrkJDasWZmljlLdBBIRJdTJ%2F1KfI8OSA2lmw25Rp589uGJwvcgLTu6F7HgImnOQygz9NN5AfqWcV3qDIXCm4SdHm5HW250FmsnY%2F6MNviPkL7BpqOmVvmYOxzYcHQ33jnfz6GSlFRYmndF4WNfRk0Cwxuju9mTz%2FuZ0sDL2clMqaZGjlZ1i7MfVpDaACgAVfDcBrCtMgcridA4s9xV9Z2TSWknbsGS0UwiE0j%2F5Y%2ByNDjRd75HCQj3nAjR1o%2FERTZPRvDYXAYfRvbFeg%2BkOs8UDxH4%2BCfO%2FItzyChTt4ww65%2FivQY6pgGxbVq41CQKXzvN7oLYbqHQHX0HpEb%2BsW%2BeoBwfs%2B1aMT09ETdSdH3X6Q1CQ6N32tFQj2Zi2todDw0SWDlbJCNcUG2qcezPp%2FtFucleHgnJizuS4EYU4kSynLwDwmE9OHfXzpS2XGVxOaS3lI9LbdiOTaMHjjLM4%2Ffp252MWsGbkpIHhPVOaguuw03HGWeCHogeoCVoYEa1e5Xxl%2FkAwjZN0OUc8avs&X-Amz-Signature=4b38877265d109d0fdbeff908c09781cf46b030ac3023605aa5685081e683a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJY6IIOD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALv2J3Js%2FmFTDdzbhb3ZAqeGELicwvhkRDswAD8i4oIAiAyMSYZ5DxxxXKQL9UWbN36OnMVXC0zOHPH0TNIEaG65yqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBxX8JQgLap1lo0ZwKtwDPPlz2GqCAk%2F%2FjWiek%2Fwo48ih3KTV79WEnrjzDZbP3f9VpH7eteQAKsGDIJpmrJ%2Blak8zu4q%2FDbJD7v6zvZ9FxN8BrF93WzRmlqKzy6IhuYlItL%2BocBLin9SJg8j5tQj9HjU%2FNtiGHAodcII4bZMmxgjBWZa%2BskV0ltTyFoMtNEzNmgI9uqUqRY3MpTuXsADRAer%2F8JXMzOyJOfkw%2Byj4Iu3rS3%2BQEjdzDT1FtSTvqtWVdumVSbcuTNECMHzccj%2FWy4VjzS4vqOY5FL984yaLGvT%2F6xO3wmCMV8GoxMKcGBUAJDJIQAugztEdEe9JkDto8ozotRpWHmL%2FHzgrtgkrkJDasWZmljlLdBBIRJdTJ%2F1KfI8OSA2lmw25Rp589uGJwvcgLTu6F7HgImnOQygz9NN5AfqWcV3qDIXCm4SdHm5HW250FmsnY%2F6MNviPkL7BpqOmVvmYOxzYcHQ33jnfz6GSlFRYmndF4WNfRk0Cwxuju9mTz%2FuZ0sDL2clMqaZGjlZ1i7MfVpDaACgAVfDcBrCtMgcridA4s9xV9Z2TSWknbsGS0UwiE0j%2F5Y%2ByNDjRd75HCQj3nAjR1o%2FERTZPRvDYXAYfRvbFeg%2BkOs8UDxH4%2BCfO%2FItzyChTt4ww65%2FivQY6pgGxbVq41CQKXzvN7oLYbqHQHX0HpEb%2BsW%2BeoBwfs%2B1aMT09ETdSdH3X6Q1CQ6N32tFQj2Zi2todDw0SWDlbJCNcUG2qcezPp%2FtFucleHgnJizuS4EYU4kSynLwDwmE9OHfXzpS2XGVxOaS3lI9LbdiOTaMHjjLM4%2Ffp252MWsGbkpIHhPVOaguuw03HGWeCHogeoCVoYEa1e5Xxl%2FkAwjZN0OUc8avs&X-Amz-Signature=ef0015e3462acf6e7f7b0d464fa5d4a5ad499eeeb910147d2c1c08e5c8b5e635&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
