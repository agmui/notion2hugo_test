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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFY44ODP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7wp39Y23HVIdLFFu%2FxWEHgR9q2wBPRTOEHZeKLBVTIwIgErhmYYpOaki3wi8JJpyoLXbHtX9m%2FklJ6k2G4%2BaqFkEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGchyoCU6PqNrOtbircA0jHfb01nO2ivjQGOnVZHE4V75ry0AU4F%2Fm%2BCS8Cgm8cevf%2BKJOOLh2q3W9hqbQTaQzyNf9N%2FcDbzLDOWVXipVCvFEj3N5xqHCaJoAlBIJt5Bl9VkJr67V5gc25SUduBJNhPiJb6bKEVW1vCUPfQF1cWj3jQTmimafnwRuYJOwcqtBus%2F9AHcFU3B%2BAJe4ehRnh%2Bl5MFxXF6GqbJU5%2BR1S2pocpeLmieZPp%2FBurpQa1eQ3dPzVLNNkedXwiLqIqqYB4T69vmEawYxXYcQlhLgcn3QEbHLMlrVrEy0wnCmCUqa5Tv%2FlCWT05de%2B%2FcQsqqHdykQJXLNj1DVxXw69CM38TELm5VsH8H256j9V5OLHpn%2Bq5hU%2FFMP5VGqZzN97NpQJ68bI2av2OBK2SWaSzFc78Ge2MjYfa4EI55LoJtGiUec89uvV9aiTVOInigqfm0TJmAnsPhvRcs36J36n7z2hlOjuSpKtOSbRCKgDB0j9nDKfwDbhJb8NueNCmstLI6aVxBl9NBMddJxuHdWyVSu8lEdn8gfbTHcM8wO59n%2Bpsik4PK4ynwegEyTOw6YIkheGCYL2hneNk3sjSh52Tp3wI7WnL81Ryse1uUoc4Ehvo2Umjwj%2Bqu4ADNnpRrMNmnv8MGOqUBTGXm9lZr%2FBuy92cfKD89ONtB8Q4YoTnW45lFRDLtHA%2FfC0b4ykwtziSnOeWfmF1uEqlDnu6MSK2ECbo1wCr9MEvP%2BZ64jsVbUSOhm0PtKLknezvHxzxcnXoi4xeWee%2BRIZA%2F28KP0QHgLGMIFn%2BZVXFIXbr7I4vseb%2B99FJ5U6SDmtHG1BO%2FX1uaUOt89InBCrjhUmqsbnWjD6UjQS5w0rHkT0GG&X-Amz-Signature=4ffffcc780fb142a29f5510d90f5ee2773f235cd0b8cd59b7a5ad23d7ab3477a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFY44ODP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7wp39Y23HVIdLFFu%2FxWEHgR9q2wBPRTOEHZeKLBVTIwIgErhmYYpOaki3wi8JJpyoLXbHtX9m%2FklJ6k2G4%2BaqFkEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGchyoCU6PqNrOtbircA0jHfb01nO2ivjQGOnVZHE4V75ry0AU4F%2Fm%2BCS8Cgm8cevf%2BKJOOLh2q3W9hqbQTaQzyNf9N%2FcDbzLDOWVXipVCvFEj3N5xqHCaJoAlBIJt5Bl9VkJr67V5gc25SUduBJNhPiJb6bKEVW1vCUPfQF1cWj3jQTmimafnwRuYJOwcqtBus%2F9AHcFU3B%2BAJe4ehRnh%2Bl5MFxXF6GqbJU5%2BR1S2pocpeLmieZPp%2FBurpQa1eQ3dPzVLNNkedXwiLqIqqYB4T69vmEawYxXYcQlhLgcn3QEbHLMlrVrEy0wnCmCUqa5Tv%2FlCWT05de%2B%2FcQsqqHdykQJXLNj1DVxXw69CM38TELm5VsH8H256j9V5OLHpn%2Bq5hU%2FFMP5VGqZzN97NpQJ68bI2av2OBK2SWaSzFc78Ge2MjYfa4EI55LoJtGiUec89uvV9aiTVOInigqfm0TJmAnsPhvRcs36J36n7z2hlOjuSpKtOSbRCKgDB0j9nDKfwDbhJb8NueNCmstLI6aVxBl9NBMddJxuHdWyVSu8lEdn8gfbTHcM8wO59n%2Bpsik4PK4ynwegEyTOw6YIkheGCYL2hneNk3sjSh52Tp3wI7WnL81Ryse1uUoc4Ehvo2Umjwj%2Bqu4ADNnpRrMNmnv8MGOqUBTGXm9lZr%2FBuy92cfKD89ONtB8Q4YoTnW45lFRDLtHA%2FfC0b4ykwtziSnOeWfmF1uEqlDnu6MSK2ECbo1wCr9MEvP%2BZ64jsVbUSOhm0PtKLknezvHxzxcnXoi4xeWee%2BRIZA%2F28KP0QHgLGMIFn%2BZVXFIXbr7I4vseb%2B99FJ5U6SDmtHG1BO%2FX1uaUOt89InBCrjhUmqsbnWjD6UjQS5w0rHkT0GG&X-Amz-Signature=2ee16855d7a4993ed55f1141717a75d94a39eff601ac31689547d94505885119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
