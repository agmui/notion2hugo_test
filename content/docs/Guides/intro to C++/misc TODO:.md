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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPA3FKB%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEY21kOGrvkpL6djD6LMYyX2dkBkJqXtTfoa3GWfTjpVAiEA%2F2bvTx8vF0zblcY3fBBSzbTMRw2i2WWf3jcUCc00BwIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBLhbeowlj4333IZlSrcA0UBg6dKlU6J8Gqh9FeJpR0lJpNtYj6Okt4NZfBWc0pjfTXFPcBqs161518enFgnOGSiDrRwpvBiUwXZ3%2F7OiDTZjZquDMfa1YgB0CEtkzA2ypa6TB5eXa1WsLUS9ReJPLpSDMSbt3DdgsTOuX6SB7MZjamgi6%2BTJD0NJx5o1UnEudnoE%2FWc0cvSmLmL3f%2BmFc1UsneClcxZZRZCOZPgRTU8T7b3M2I99rpgciGYfu1qsJvPVoIUVr1R6W3KCm%2Bjy1HfpMuSUE3bdpioXw9K6V2qIYTVnrg35KKmCsBXQc7Efbo5vDEj%2FiFQdO6VPDisHkQZjcopb6vtBiJQG5jx6wfZbqYbVQckuTN0Yt8RFSnjdK8K6MhbKXzuv%2BNvfeZpS7PezsRBflTGZr0e8kxpvtT253iTxNEFSa3l4WMCfIKcavGr%2BS3pqJQvVWM0%2BWgHubp%2BttSyyRDCoTg2HMsaLq4rVzGd%2FmrNhvBTpE6A1wgxx1ia9VJkA3sASK4L5v9mKukcUOu5sr8WDb57ENyciI6Yiw36X0fT%2FV%2FX0UuDV9WEvWgZtTtW7IbxoWEOZPehuWFhJhTfzCDkckLoc21UaekG4c3EltYJutUOyidVgxjAhwuerb8fan8YMMWWMOTT%2BcIGOqUB1HGRmSUQvqcOV9P63zseQmxkEctxRlZrvjYX59AjQOHdFpE1JydZ1YjtVadx2paXF191GyvFCVOE1ntKtCQ9hkUQFafefXwxGIDeEwk3SKI8flKzro2ZjlnWWLHTaLOr4W2PR33K3zcNvRw8xvRjJCByiQtuVIWQG9NelwoCjM%2B9tkAPkHc%2FRXjaCnA0UFj%2F7aPWwFuPlDpmAIWa8Zu%2BQKVeRG8e&X-Amz-Signature=caf6d28ef28e9437fa94dc0b45262771919c32bf183f07fc6a8d5da798efba1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPA3FKB%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEY21kOGrvkpL6djD6LMYyX2dkBkJqXtTfoa3GWfTjpVAiEA%2F2bvTx8vF0zblcY3fBBSzbTMRw2i2WWf3jcUCc00BwIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBLhbeowlj4333IZlSrcA0UBg6dKlU6J8Gqh9FeJpR0lJpNtYj6Okt4NZfBWc0pjfTXFPcBqs161518enFgnOGSiDrRwpvBiUwXZ3%2F7OiDTZjZquDMfa1YgB0CEtkzA2ypa6TB5eXa1WsLUS9ReJPLpSDMSbt3DdgsTOuX6SB7MZjamgi6%2BTJD0NJx5o1UnEudnoE%2FWc0cvSmLmL3f%2BmFc1UsneClcxZZRZCOZPgRTU8T7b3M2I99rpgciGYfu1qsJvPVoIUVr1R6W3KCm%2Bjy1HfpMuSUE3bdpioXw9K6V2qIYTVnrg35KKmCsBXQc7Efbo5vDEj%2FiFQdO6VPDisHkQZjcopb6vtBiJQG5jx6wfZbqYbVQckuTN0Yt8RFSnjdK8K6MhbKXzuv%2BNvfeZpS7PezsRBflTGZr0e8kxpvtT253iTxNEFSa3l4WMCfIKcavGr%2BS3pqJQvVWM0%2BWgHubp%2BttSyyRDCoTg2HMsaLq4rVzGd%2FmrNhvBTpE6A1wgxx1ia9VJkA3sASK4L5v9mKukcUOu5sr8WDb57ENyciI6Yiw36X0fT%2FV%2FX0UuDV9WEvWgZtTtW7IbxoWEOZPehuWFhJhTfzCDkckLoc21UaekG4c3EltYJutUOyidVgxjAhwuerb8fan8YMMWWMOTT%2BcIGOqUB1HGRmSUQvqcOV9P63zseQmxkEctxRlZrvjYX59AjQOHdFpE1JydZ1YjtVadx2paXF191GyvFCVOE1ntKtCQ9hkUQFafefXwxGIDeEwk3SKI8flKzro2ZjlnWWLHTaLOr4W2PR33K3zcNvRw8xvRjJCByiQtuVIWQG9NelwoCjM%2B9tkAPkHc%2FRXjaCnA0UFj%2F7aPWwFuPlDpmAIWa8Zu%2BQKVeRG8e&X-Amz-Signature=ed6c016961850981121ff1cfe336b7ac0eac7c05a32ddbf9412909f17e5140db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
