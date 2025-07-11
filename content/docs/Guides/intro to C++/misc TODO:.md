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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGOD4WGZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXg9oQdjV0V0%2FHepuyN3hXcD1Pp1i5w3Ao5TZsCDZWXAiEA4dncIMwddaU0SngAERSQ6jI5NmLjBnZ1znSBAWj39ccqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvv%2BjLALd%2BnnExGgircAx8f3FJAV%2Bql2ksvrmmOye6IRudRQfdV%2BJVzU9XcmLKzkHd29LI2JMIP52HT%2Bi%2Fvqdf5ioYFlPKoXXDoX3vU9UOa4knh7LgOcTMZlLblR%2FGw1w6LtsM9UUQnV3TB4yyY687xGitQPzhwMccVbUuV%2FXZqkxUm5hHs5WNSx6F64mPT3KWZKKRBuNfnnc7xSQB6ZUhWrH%2BSJ4L77%2F8q0sMkNmesj5xYKf%2FeYJjbsdIhaN%2FVQqy35P69hgwhcGGoaCAFQz4NDh7JwBlA1IVbsKvr8jD9PbbiCknGa3SzUFthvRRiRrWlJAVcsKxR1tbXNLj%2Bq%2B4Xs%2F6XcfAUIfRhRk8h3hsDIhvPidTwEEd1RPS9IjyZkV3Piii9kslQmslDhFtWQyhFOw6lgwC%2BUllaJ7b4KsRu0tcHd48SsgeQBfETvBKywqoRKxLFpmu7J7kpsgxd9zTjNC08KUGLuIysfA9ZfreHiXDNchVJSq8RjHQdzgI%2FEaCnL3eHzmZYiRwr0mJb0th9BgwS0%2FpcDbIrrC1HIj99gvHUKNw0pNjKLR8mUxcI%2F3yH7rAAaZWuZWRR04R0RiOsCaHfqPhLx%2FNg2wpac3qy0gbMQhpc4VeUX3l%2B4NkDILqMrJ%2FX8UthUF94MPD%2BxMMGOqUBDr5BcR7QdXVXJRKmhi7Ar8CNg%2B%2BohtD9tJUMHJWhPRirS%2Bgbqh%2B%2FpGha1YN0rdjhUeYaJL2ZCPA0F53zMW4PKzdG29sbIP7zQMZj4wk52EcPX%2FYTmSlpbD88cW5vfJcs8AueRufCJLU%2F%2BVyW%2BfGzSG64eJ6hpKPrXW9hQmIwRiwy6NHrrVEX86CcWBt2dQZ3gNa%2BHbjPU8mGu30uYckyN93St7EL&X-Amz-Signature=1fe677416553c2bf5705a2fe806995b6832da18cdd52c1edc9f16db131503005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGOD4WGZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXg9oQdjV0V0%2FHepuyN3hXcD1Pp1i5w3Ao5TZsCDZWXAiEA4dncIMwddaU0SngAERSQ6jI5NmLjBnZ1znSBAWj39ccqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvv%2BjLALd%2BnnExGgircAx8f3FJAV%2Bql2ksvrmmOye6IRudRQfdV%2BJVzU9XcmLKzkHd29LI2JMIP52HT%2Bi%2Fvqdf5ioYFlPKoXXDoX3vU9UOa4knh7LgOcTMZlLblR%2FGw1w6LtsM9UUQnV3TB4yyY687xGitQPzhwMccVbUuV%2FXZqkxUm5hHs5WNSx6F64mPT3KWZKKRBuNfnnc7xSQB6ZUhWrH%2BSJ4L77%2F8q0sMkNmesj5xYKf%2FeYJjbsdIhaN%2FVQqy35P69hgwhcGGoaCAFQz4NDh7JwBlA1IVbsKvr8jD9PbbiCknGa3SzUFthvRRiRrWlJAVcsKxR1tbXNLj%2Bq%2B4Xs%2F6XcfAUIfRhRk8h3hsDIhvPidTwEEd1RPS9IjyZkV3Piii9kslQmslDhFtWQyhFOw6lgwC%2BUllaJ7b4KsRu0tcHd48SsgeQBfETvBKywqoRKxLFpmu7J7kpsgxd9zTjNC08KUGLuIysfA9ZfreHiXDNchVJSq8RjHQdzgI%2FEaCnL3eHzmZYiRwr0mJb0th9BgwS0%2FpcDbIrrC1HIj99gvHUKNw0pNjKLR8mUxcI%2F3yH7rAAaZWuZWRR04R0RiOsCaHfqPhLx%2FNg2wpac3qy0gbMQhpc4VeUX3l%2B4NkDILqMrJ%2FX8UthUF94MPD%2BxMMGOqUBDr5BcR7QdXVXJRKmhi7Ar8CNg%2B%2BohtD9tJUMHJWhPRirS%2Bgbqh%2B%2FpGha1YN0rdjhUeYaJL2ZCPA0F53zMW4PKzdG29sbIP7zQMZj4wk52EcPX%2FYTmSlpbD88cW5vfJcs8AueRufCJLU%2F%2BVyW%2BfGzSG64eJ6hpKPrXW9hQmIwRiwy6NHrrVEX86CcWBt2dQZ3gNa%2BHbjPU8mGu30uYckyN93St7EL&X-Amz-Signature=4e796a7d0fd6c209b9d385232753903745f4e5e02293f06a10f5282f705c2cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
