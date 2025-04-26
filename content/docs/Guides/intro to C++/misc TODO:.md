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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XI47B2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGRxOh%2B4BalapzvdF939fLywx3DhU3%2Fvw64%2F8OymCCYAiEAttSZFpzYjGx1M6c%2BZHAKnhM6yucY%2Bwp%2Fq4E%2FxqgO42oq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPI9queE%2F1HqGl3lbSrcA%2BD1aW%2FwjK03k8nd3vvq5JwNxxwwPzRPV0Gn%2FPOudXxYnzK0maJkPMafa8VBhSnZYlz7Z0IJwLImWVr3i5slNPoNDjmZ9hf%2FvzTMaczjoXZVCsAP82ta6wo2TnqQcuK1xZ5%2FA7t2uLq0Hz1jDL6BYb8rPNdap2gCRIMAsoaOPlc32v%2FQ0W%2Bl%2Bl%2Bh%2BXk2hdmmpKcdheM4Jia7w1VFrOvOFvnH5HVrJlqEF1RmFqvgDg8T8kbR8HRE4TIm4c1dVa42cfmVOjxiseFhr7YGLyQiK6oyfw7YMsuoNNna8MqDUfhfbnqmKp47ssHWfSVdCCrI%2BG8XZ5BZgnHyFnHY2pw%2BOezRZ7zjzvXeDM98mHzXaQtFDVa4hi8r9OzVOKIcztYttIn1mFnVo6m8oIW4mTpW4XQx2bxBdBUfgszlRIjwS1Y886PGWlwtYqOfOw9wkRUY3P38OdddgHxkmiUS0UKOEvXSzC1zDMcJytJypMQ%2BHxuw25JhmCaBNAZtTCqAVXq6tcAqmExl%2BwqyNZQq2POIwWYAQ6qECE1Rohf7mf5zJCp5E4RC%2Fruqo4MouvdjdDyuUd%2FgLpXCT1K8%2F1yvhpVZkLbGppe9wBMHpBLVqtjTNU%2FBp14JoSw89oAKIIgRMLKptMAGOqUBkgypnKTFScqFx6bXLkVJOnDvqs1bG%2BGBKK6butAiAt50POJ9GI%2FZvhcX5wcPckONryRotqqnuxAPqcfm6kAmsKx4gUEYY0kN6qtqS1Jrz60KhQM7GtcooFBmOJeyvHH4wWeRFIRrGnFOIuy2y5uZYg%2BbslyRulbgjEohmEzvtLwjKPUPHq49iMFAM5Fx1%2FIQigjiOtDaG%2Fm%2Fsz2E0aIgV6OrqNAy&X-Amz-Signature=e0aecafa78bdd0654c8abf7cf5981db46d6797ef29be5a89d8c8e293256c6473&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XI47B2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGRxOh%2B4BalapzvdF939fLywx3DhU3%2Fvw64%2F8OymCCYAiEAttSZFpzYjGx1M6c%2BZHAKnhM6yucY%2Bwp%2Fq4E%2FxqgO42oq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPI9queE%2F1HqGl3lbSrcA%2BD1aW%2FwjK03k8nd3vvq5JwNxxwwPzRPV0Gn%2FPOudXxYnzK0maJkPMafa8VBhSnZYlz7Z0IJwLImWVr3i5slNPoNDjmZ9hf%2FvzTMaczjoXZVCsAP82ta6wo2TnqQcuK1xZ5%2FA7t2uLq0Hz1jDL6BYb8rPNdap2gCRIMAsoaOPlc32v%2FQ0W%2Bl%2Bl%2Bh%2BXk2hdmmpKcdheM4Jia7w1VFrOvOFvnH5HVrJlqEF1RmFqvgDg8T8kbR8HRE4TIm4c1dVa42cfmVOjxiseFhr7YGLyQiK6oyfw7YMsuoNNna8MqDUfhfbnqmKp47ssHWfSVdCCrI%2BG8XZ5BZgnHyFnHY2pw%2BOezRZ7zjzvXeDM98mHzXaQtFDVa4hi8r9OzVOKIcztYttIn1mFnVo6m8oIW4mTpW4XQx2bxBdBUfgszlRIjwS1Y886PGWlwtYqOfOw9wkRUY3P38OdddgHxkmiUS0UKOEvXSzC1zDMcJytJypMQ%2BHxuw25JhmCaBNAZtTCqAVXq6tcAqmExl%2BwqyNZQq2POIwWYAQ6qECE1Rohf7mf5zJCp5E4RC%2Fruqo4MouvdjdDyuUd%2FgLpXCT1K8%2F1yvhpVZkLbGppe9wBMHpBLVqtjTNU%2FBp14JoSw89oAKIIgRMLKptMAGOqUBkgypnKTFScqFx6bXLkVJOnDvqs1bG%2BGBKK6butAiAt50POJ9GI%2FZvhcX5wcPckONryRotqqnuxAPqcfm6kAmsKx4gUEYY0kN6qtqS1Jrz60KhQM7GtcooFBmOJeyvHH4wWeRFIRrGnFOIuy2y5uZYg%2BbslyRulbgjEohmEzvtLwjKPUPHq49iMFAM5Fx1%2FIQigjiOtDaG%2Fm%2Fsz2E0aIgV6OrqNAy&X-Amz-Signature=bf09c01cde0d84e068ef08562105f2b90d6850cd2dde92f08e6388060ccc0d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
